
const inquirer = require('inquirer');
const moment = require('moment');

// // preguntas
// // inquirer.prompt([{
// //     name: 'color',
// //     message: 'What is your favorite color?',
// //     default: 'red'
// // },{
// //     name: 'website',
// //     message: 'What is your favorite website?'
// // }]).then(answer => {
// //     console.log("Answer: ",  answer);
// // });


// // listas
// inquirer.prompt([{
//     type: "list",
//     name: "list_colors",
//     message: "which are your favorite color?",
//     choices: ["red", "blue", "green"]
// },
// {
//     type: "rawlist",
//     name: "raw_colors",
//     message: "which are your favorite color?",
//     choices: ["red", "blue", "green"]
// },
// {
//     type: "rawlist",
//     name: "option_colors",
//     message: "which are your favorite color?",
//     choices: ["red", "blue", "green"]
// },
// {
//     type: "expand",
//     name: "expand_colors",
//     message: "which are your favorite color?",
//     choices: [
//         { key: "r", value:"red"},
//         { key: "g", value:"green"},
//         { key: "w", value:"white"}
//     ]
// },{
//     type: "checkbox",
//     name: "check_colors",
//     message: "which are your favorite color?",
//     choices: ["red", "green", "white"]
// },
// {
//     type: "password",
//     name: "pass",
//     message: "password: "
// },
// {
//     type: "password",
//     name: "pass_2",
//     message: "password: ",
//     mask: "*"
// },
// // {
// //     type: "editor",
// //     name: "code",
// //     message: "Press enter for open editor"
// // }
// ]).then(answer => {
//     console.log('Answer: ', answer);
// });



// preguntas
// inquirer.prompt([{
//     name: 'color',
//     message: 'What is your favorite color?',
//     default: 'red'
// },{
//     name: 'website',
//     message: 'What is your favorite website?'
// }]).then(answer => {
//     console.log("Answer: ",  answer);
// });

const presentationIPs = [
    { name: "WPOLPS02", ip: "172.22.85.65", snActive: true },
    { name: "WPOLPS03", ip: "172.22.85.35", snActive: true },
    { name: "WPOLPS04", ip: "172.22.85.36", snActive: true },
    { name: "WPOLPS05", ip: "172.22.85.93", snActive: true },
    { name: "WPOLPS06", ip: "172.23.92.118", snActive: true }
];

const servicesIPs = [
    { name: "WPOLBA02", ip: "172.22.85.98", snActive: true },
    { name: "WPOLBA03", ip: "172.22.85.254", snActive: true },
    { name: "WPOLBA04", ip: "172.22.85.34", snActive: true },
    { name: "WPOLBA05", ip: "172.22.4.58", snActive: true },
    { name: "WPOLBA06", ip: "172.22.85.196", snActive: true },
    { name: "WPOLBA08", ip: "172.22.85.103", snActive: true },
    { name: "WPOLBA15", ip: "172.22.4.145", snActive: true },
    { name: "WPOLBA16", ip: "172.23.3.176", snActive: true }
];

const aspIPs = [
    { name: "WPOLI1", ip: "172.22.4.31", snActive: true },
    { name: "WPOLI2", ip: "172.22.4.105", snActive: true },
    { name: "WPOLI3", ip: "172.22.4.106", snActive: true },
    { name: "WPOLI4", ip: "172.22.4.108", snActive: true }
];


function getFolders(){
    return [
        {
            name: "origin_folder",
            message: "Ingrese ruta carpeta origen: "
        },
        {
            name: "backup_folder",
            message: "Ingrese ruta carpeta de backup: "
        },
        {
            name: "destiny_folder",
            message: "Ingrese ruta carpeta de destino: "
        }
    ];
}

function getQuantityProjects(){
    return {
        name: "quantity_projects",
        message: "Cantidad de proyectos: "
    };
}

async function cathDataProject(index){
    console.log(`*******  Proyecto ${index}  *******`);

    const { title } = await inquirer.prompt({ name: 'title', message: 'Titulo del proyecto: ' });
    const { origin_folder, backup_folder, destiny_folder }  = await inquirer.prompt(getFolders());

    return {
        index,
        title,
        origin_folder,
        backup_folder,
        destiny_folder
    }
}

function generateBatch(){
    let title = `@rem **********************************************
@rem       Proceso Puesta en produccion
@rem       Creado por: HITSS
@rem       fecha: ${moment().format('DD/MM/YYYY')}
@rem **********************************************\n\n`;

    let useNetworks = `net use "\\\\172.22.4.47\\PPPoliedros"
net use "\\\\172.22.4.47\\BACKUPPPP" \n\n`;

    if(presentation.length > 0){
        for(server of presentationIPs){
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }
    }

    if(services.length > 0){
        for(server of servicesIPs){
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }
    }

    if(aspIPs.length > 0){
        for(server of aspIPs){
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }
    }


    return `${title} ${useNetworks}`;

}

const presentation = [];
const services = [];
const asp = [];


async function main(){

    const { servers } = await inquirer.prompt(
    {
        type: "checkbox",
        name: "servers",
        message: "Seleccione servidores: ",
        choices: ["Presentacion", "Servicios", "ASP_Clasico"]
    });

    for(server of servers){
        switch (server) {
            case "Presentacion":
                const resultPresentation = await inquirer.prompt(getQuantityProjects());
                let quantity_projects_p = resultPresentation.quantity_projects;

                for (let index = 1; index <= quantity_projects_p; index++) {
                    const project = await cathDataProject(index);
                    presentation.push(project);
                }

                console.log(presentation);

                break;
            case "Servicios":
                const resultService = await inquirer.prompt(getQuantityProjects());
                let quantity_projects_s = resultService.quantity_projects;

                for (let index = 1; index <= quantity_projects_s; index++) {
                    const project = await cathDataProject(index);
                    services.push(project);
                }

                console.log(services);

                break;
            case "ASP_Clasico":
                const resultClassic = await inquirer.prompt(getQuantityProjects());
                let quantity_projects_c = resultClassic.quantity_projects;

                for (let index = 1; index <= quantity_projects_c; index++) {
                    const project = await cathDataProject(index);
                    asp.push(project);
                }

                console.log(asp);

                break;
        }
    }

    console.log(generateBatch());

}

console.log(`\n*************************************`);
console.log(`*******  Generador Batch PAP  *******\n`);

main();
