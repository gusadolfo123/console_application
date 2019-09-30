const inquirer = require('inquirer');
const questions = require('./questions');

async function catchInitialData() {
    return await inquirer.prompt(questions.initialQuestions());
}

async function cathDataProject(index) {
    console.log(`*******  Proyecto ${index}  *******`);

    const { title } = await inquirer.prompt({ name: 'title', message: 'Titulo del proyecto: ' });
    const { origin_folder, destiny_folder } = await inquirer.prompt(questions.getFolders());

    return {
        index,
        title,
        origin_folder,
        destiny_folder,
    };
}

async function cathDataPerIndividualProject(list) {
    const { quantity_projects } = await inquirer.prompt(questions.getQuantityProjects());

    for (let index = 1; index <= quantity_projects; index++) {
        const project = await cathDataProject(index);
        list.push(project);
    }
}

module.exports = {
    catchInitialData,
    cathDataProject,
    cathDataPerIndividualProject
}