const { createRepoService } = require('../services/Repository');

const newProject = async (name, gitlab, models) => {
    try {
        createRepoService(name, gitlab);
        
    } catch (err) {
        
    }
};

const addSignalPoint = async (satellite) => {
    try {
        await add(satellite);
        return true;
    } catch (e) {
        throw e;
    }
    
};

const getSignalPoints = async () => {
    try {
        const satellites = await get();
        return await processSignal(satellites);
    } catch (err) {
        throw err;
    }
}

const resetSignalPoints = async () => {
    try {
        await reset();
        return true;
    } catch (e) {
        throw e;
    }

}

module.exports = { newProject, addSignalPoint, getSignalPoints, resetSignalPoints };