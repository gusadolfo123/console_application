const fs = require('fs');

function createFile(nameFile, data) {
    fs.writeFile(`${nameFile}.bat`, data, err => {
        if (err) throw err;
        console.log(`\n\nArchivo ${nameFile}.bat ha sido creado correctamente.\n\n`);
    });
}

function checkDirectory(directory) {
    fs.stat(directory, function(err) {
        if (err) {
            console.log(`La carpeta dada no existe o no es accesible ${err.message}`);
            return false;
        }
        return true;
    });
}

module.exports = {
    createFile
};