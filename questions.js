questions = {}

questions.getFolders = function() {
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

questions.getQuantityProjects = function() {
    return {
        name: 'quantity_projects',
        message: 'Cantidad de proyectos: ',
    };
}

questions.initialQuestions = function() {
    return [
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
    ];
}

module.exports = questions;