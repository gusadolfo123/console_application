
const inquirer = require('inquirer');

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


// listas
inquirer.prompt(
{
    type: "checkbox",
    name: "servers",
    message: "Seleccione servidores: ",
    choices: ["Presentacion", "Servicios", "ASP_Clasico"]
}).then(answer => {

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

    const { servers } = answer;

    for(server of servers){
        switch (server) {
            case "Presentacion":
                inquirer.prompt([
                    {
                        name: "origin_folder",
                        message: "Ingrese ruta origen: "
                    },
                    {
                        name: "destiny_folder",
                        message: "Ingrese ruta de destino: "
                    },
                ]).then(res => {
                    console.log(res);
                })

                break;
            case "Servicios":
                break;
            case "ASP_Clasico":
                break;
        }
    }


});


