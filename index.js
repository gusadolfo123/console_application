const inquirer = require('inquirer');
const moment = require('moment');
const fs = require('fs');

const applicationIPs = [
	{ name: 'WPOLPS02', ip: '172.22.85.65', snActive: true },
	{ name: 'WPOLPS03', ip: '172.22.85.35', snActive: true },
	{ name: 'WPOLPS04', ip: '172.22.85.36', snActive: true },
	{ name: 'WPOLPS05', ip: '172.22.85.93', snActive: true },
	{ name: 'WPOLPS06', ip: '172.23.92.118', snActive: true },
];

const servicesIPs = [
	{ name: 'WPOLBA02', ip: '172.22.85.98', snActive: true },
	{ name: 'WPOLBA03', ip: '172.22.85.254', snActive: true },
	{ name: 'WPOLBA04', ip: '172.22.85.34', snActive: true },
	{ name: 'WPOLBA05', ip: '172.22.4.58', snActive: true },
	{ name: 'WPOLBA06', ip: '172.22.85.196', snActive: true },
	{ name: 'WPOLBA08', ip: '172.22.85.103', snActive: true },
	{ name: 'WPOLBA15', ip: '172.22.4.145', snActive: true },
	{ name: 'WPOLBA16', ip: '172.23.3.176', snActive: true },
];

const aspIPs = [{ name: 'WPOLI1', ip: '172.22.4.31', snActive: true }, { name: 'WPOLI2', ip: '172.22.4.105', snActive: true }, { name: 'WPOLI3', ip: '172.22.4.106', snActive: true }, { name: 'WPOLI4', ip: '172.22.4.108', snActive: true }];

const applications = [];
const services = [];
const asp = [];
let baseFolder = '';
let nameBrief = '';

function getFolders() {
	return [
		{
			name: 'origin_folder',
			message: 'Ingrese ruta carpeta origen: ',
		},
		{
			name: 'destiny_folder',
			message: 'Ingrese ruta carpeta de destino: ',
		},
	];
}

function getQuantityProjects() {
	return {
		name: 'quantity_projects',
		message: 'Cantidad de proyectos: ',
	};
}

async function cathDataProject(index) {
	console.log(`*******  Proyecto ${index}  *******`);

	const { title } = await inquirer.prompt({ name: 'title', message: 'Titulo del proyecto: ' });
	const { origin_folder, destiny_folder } = await inquirer.prompt(getFolders());

	return {
		index,
		title,
		origin_folder,
		destiny_folder,
	};
}

function createCopyFolder(title, origin, destiny, ip, name) {
	let body = `@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_${name}::%date:~0,15%  %time:~0,8% *********** >> ${baseFolder}\\Logs\\PAP_svr_${title}.txt \n`;
	body += `XCOPY "${baseFolder}${origin}\\*.*" "\\\\${ip}\\d$${destiny}" /H /K /E /R /Y /F /I >> ${baseFolder}\\Logs\\PAP_svr_${title}.txt \n\n`;

	return body;
}

function generateBatch() {
	let title = `@rem **********************************************
@rem       Proceso Puesta en produccion
@rem       Creado por: HITSS
@rem       fecha: ${moment().format('DD/MM/YYYY')}
@rem       Brief: ${nameBrief}
@rem **********************************************\n`;

	let useNetworks = `\nnet use "\\\\172.22.4.47\\PPPoliedros"
net use "\\\\172.22.4.47\\BACKUPPPP" \n\n`;

	let bodyApplication = ``;
	let bodyService = ``;
	let bodyASP = ``;

	if (applications.length > 0) {
		useNetworks += `@REM SERVER APLICATION \n`;

		for (server of applicationIPs) {
			useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
		}

		// se recorren los proyectos
		for (serverP of applications) {
			bodyApplication += `\n@Echo Se ha INICIADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

			// se recorren los servidores
			for (server of applicationIPs) {
				bodyApplication += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name);
			}

			bodyApplication += `@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
		}
	}

	if (services.length > 0) {
		useNetworks += `\n@REM SERVER SERVICES \n`;

		for (server of servicesIPs) {
			useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
		}

		for (serverP of services) {
			bodyService += `\n@Echo Se ha INICIADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

			// se recorren los servidores
			for (server of servicesIPs) {
				bodyService += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name);
			}

			bodyService += `@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
		}
	}

	if (asp.length > 0) {
		useNetworks += `\n@REM SERVER ASP \n`;

		for (server of aspIPs) {
			useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
		}

		for (serverP of asp) {
			bodyASP += `\n@Echo Se ha INICIADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

			// se recorren los servidores
			for (server of aspIPs) {
				bodyASP += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name);
			}

			bodyASP += `@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
		}
	}

	const result = `${title} ${useNetworks} ${bodyApplication} ${bodyService} ${bodyASP} \n\n PAUSE`;

	createFile('Puesta_en_produccion', result);
}

function createFile(nameFile, data) {
	fs.writeFile(`${nameFile}.bat`, data, err => {
		if (err) throw err;
		console.log(`Archivo ${nameFile}.bat ha sido creado correctamente.`);
	});
}

function checkDirectory(directory) {
	fs.stat(directory, function(err) {
		if (err) {
			console.log(`La carpeta dada no existe o no es accesible ${err.message}`);
		}
	});
}

async function main() {
	const { servers, base_folder, name_brief } = await inquirer.prompt([
		{
			name: 'name_brief',
			message: 'Ingrese Numero del Brief: ',
		},
		{
			name: 'base_folder',
			message: 'Ingrese ruta carpeta del Brief: ',
		},
		{
			type: 'checkbox',
			name: 'servers',
			message: 'Seleccione servidores: ',
			choices: ['Aplicacion', 'Servicios', 'ASP_Clasico'],
		},
	]);

	checkDirectory(base_folder);

	nameBrief = name_brief;
	baseFolder = base_folder;

	for (server of servers) {
		switch (server) {
			case 'Aplicacion':
				console.clear();
				console.log(`****************************`);
				console.log(`*******  Aplicacion  *******\n\n`);
				const resultApplication = await inquirer.prompt(getQuantityProjects());
				let quantity_projects_p = resultApplication.quantity_projects;

				for (let index = 1; index <= quantity_projects_p; index++) {
					const project = await cathDataProject(index);
					checkDirectory(`${base_folder}${project.origin_folder}`);
					checkDirectory(`${base_folder}${project.destiny_folder}`);

					applications.push(project);
				}

				break;
			case 'Servicios':
				console.clear();
				console.log(`****************************`);
				console.log(`*******  Servicios  *******\n\n`);
				const resultService = await inquirer.prompt(getQuantityProjects());
				let quantity_projects_s = resultService.quantity_projects;

				for (let index = 1; index <= quantity_projects_s; index++) {
					const project = await cathDataProject(index);
					checkDirectory(`${base_folder}${project.origin_folder}`);
					checkDirectory(`${base_folder}${project.destiny_folder}`);

					services.push(project);
				}

				break;
			case 'ASP_Clasico':
				console.clear();
				console.log(`****************************`);
				console.log(`*******  ASP Clasico  *******\n\n`);
				const resultClassic = await inquirer.prompt(getQuantityProjects());
				let quantity_projects_c = resultClassic.quantity_projects;

				for (let index = 1; index <= quantity_projects_c; index++) {
					const project = await cathDataProject(index);
					checkDirectory(`${base_folder}${project.origin_folder}`);
					checkDirectory(`${base_folder}${project.destiny_folder}`);

					asp.push(project);
				}

				break;
		}
	}

	generateBatch();
}

console.log(`\n*************************************`);
console.log(`*******  Generador Batch PAP  *******\n\n`);

main();
