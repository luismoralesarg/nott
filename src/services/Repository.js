const { Gitlab } = require('@gitbeaker/node');
const fs = require('fs');
const util = require('util');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFile);
const structure = require('../utils/structure.json');

const createRepo = (name, description) => {
    const api = new Gitlab({
        host: process.env.GITLAB_URL || 'http://gitlab.umbot.com.ar',
        token: process.env.GITLAB_TOKEN || 'dArBwpMiayX5wgroz__z',
    });
    try {
        const repo = api.Projects.create({
          name,
          description,
          initialize_with_readme: true,
          repository_access_level: 'private',
          request_access_enabled: true,
        });
        console.info(`Repo ${name} creado`);
    } catch (error) {
        console.error('No se pudo crear el repositorio:' + name);
        console.log(error)
    }
    next();
};

const createStructure = (project_name) => {
    fs.mkdirSync(project_name);
    structure.folders.forEach(folder => {
        fs.mkdirSync(`./${project_name}/${folder.name}`,{ recursive: true });
        folder.child_folders.forEach(subfolder => {
            fs.mkdirSync(`./${project_name}/${folder.name}/${subfolder.name}`, { recursive: true });
        });
    });
};

const copyTemplates = (srcDir, destDir, files) => {
    return Promise.all(files.map(f => {
      return copyFilePromise(path.join(srcDir, f), path.join(destDir, f));
    }));
}

const createModels = (models) => {
    
};

module.exports = { createRepo, createStructure, copyTemplates, createModels };