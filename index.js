
const { generateBatchPAP, generateBatchRollback, generateBatchBackUp } = require('./batch');
const { catchInitialData, cathDataProject, cathDataPerIndividualProject } = require('./projects');

(async function main() {

    const applications = [];
    const services = [];
    const asp = [];

    console.log(`\n*************************************`);
    console.log(`*******  Generador Batch PAP  *******\n\n`);

    const { servers, base_folder, name_brief } = await catchInitialData();

    for (server of servers) {
        switch (server) {
            case 'Aplicacion':
                console.clear();
                console.log(`****************************`);
                console.log(`*******  Aplicacion  *******\n\n`);
                await cathDataPerIndividualProject(applications);

                break;
            case 'Servicios':
                console.clear();
                console.log(`****************************`);
                console.log(`*******  Servicios  *******\n\n`);
                await cathDataPerIndividualProject(services);

                break;
            case 'ASP_Clasico':
                console.clear();
                console.log(`****************************`);
                console.log(`*******  ASP Clasico  *******\n\n`);
                await cathDataPerIndividualProject(asp);

                break;
        }
    }

    //generateBatchBackUp(applications, services, asp, name_brief, base_folder);
    generateBatchPAP(applications, services, asp, name_brief, base_folder);
    //generateBatchRollback(applications, services, asp, name_brief, base_folder);

})();



