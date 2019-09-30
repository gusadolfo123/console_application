const config = require('./config.json');
const moment = require('moment');
const { createFile } = require('./files');

function createCopyFolder(title, origin, destiny, ip, name, baseFolder, type) {
    switch (type) {
        case "PAP":
            let body = `@Echo *******COMIENZA LA EJECUCION DEL ${type}::SERVIDOR_${name}::%date:~0,15%  %time:~0,8% *********** >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n`;
            body += `XCOPY "${baseFolder}${origin}\\*.*" "\\\\${ip}\\d$${destiny}" /H /K /E /R /Y /F /I >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n\n`;
            break;
        case "Rollback":
            let body = `@Echo *******COMIENZA LA EJECUCION DEL ${type}::SERVIDOR_${name}::%date:~0,15%  %time:~0,8% *********** >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n`;
            body += `XCOPY "${baseFolder}${origin}\\*.*" "\\\\${ip}\\d$${destiny}" /H /K /E /R /Y /F /I >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n\n`;
            break;
        case "Backup":
            let body = `@Echo *******COMIENZA LA EJECUCION DEL ${type}::SERVIDOR_${name}::%date:~0,15%  %time:~0,8% *********** >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n`;
            body += `XCOPY "\\\\${ip}\\d$${destiny}\*.*" "${baseFolder}${origin}"  /H /K /E /R /Y /F /I >> ${baseFolder}\\Logs\\${type}_svr_${title}.txt \n\n`;
            break;
    }
    return body;
}

function generateBatchRollback() {
    const result = generateBatchBase(applications, services, asp, nameBrief, folder, "Proceso Rollback", "Rollback");
    createFile('Rollback', result);
}

function generateBatchBackUp() {
    const result = generateBatchBase(applications, services, asp, nameBrief, folder, "Proceso Backup", "Backup");
    createFile('Backup', result);
}

function generateBatchPAP(applications, services, asp, nameBrief, folder) {
    const result = generateBatchBase(applications, services, asp, nameBrief, folder, "Puesta en Produccion", "PAP");
    createFile('Puesta_en_produccion', result);
}


function generateBatchBase(applications, services, asp, nameBrief, folder, docTitle, type) {
    let title = `@rem **********************************************
@rem       ${docTitle}
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

        for (server of config.applicationIPs) {
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }

        // se recorren los proyectos
        for (serverP of applications) {
            bodyApplication += `\n@Echo Se ha INICIADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

            // se recorren los servidores
            for (server of config.applicationIPs) {
                bodyApplication += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name, folder, type);
            }

            bodyApplication += `@Echo Se ha FINALIZADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
        }
    }

    if (services.length > 0) {
        useNetworks += `\n@REM SERVER SERVICES \n`;

        for (server of config.servicesIPs) {
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }

        for (serverP of services) {
            bodyService += `\n@Echo Se ha INICIADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

            // se recorren los servidores
            for (server of config.servicesIPs) {
                bodyService += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name, folder, type);
            }

            bodyService += `@Echo Se ha FINALIZADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
        }
    }

    if (asp.length > 0) {
        useNetworks += `\n@REM SERVER ASP \n`;

        for (server of config.aspIPs) {
            useNetworks += `net use "\\\\${server.ip}\\d$" \n`;
        }

        for (serverP of asp) {
            bodyASP += `\n@Echo Se ha INICIADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;

            // se recorren los servidores
            for (server of config.aspIPs) {
                bodyASP += createCopyFolder(serverP.title, serverP.origin_folder, serverP.destiny_folder, server.ip, server.name, folder, type);
            }

            bodyASP += `@Echo Se ha FINALIZADO el proceso de ${type} del cambio Brief ${nameBrief} - ${serverP.title} \n\n`;
        }
    }

    const result = `${title} ${useNetworks} ${bodyApplication} ${bodyService} ${bodyASP} \n\n PAUSE`;

    return result;
}

module.exports = {
    generateBatchPAP,
    generateBatchRollback,
    generateBatchBackUp
};