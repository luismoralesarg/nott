const { Gitlab } = require('@gitbeaker/node');

const isGitlabON = async function (req, res, next) {
    const api = new Gitlab({
        host: process.env.GITLAB_URL || 'http://gitlab.umbot.com.ar',
        token: process.env.GITLAB_TOKEN || 'sxRySKZeW4kPewiFzW7e',
    });
    try {
        // Obtengo users a modo de check connection. No los utilizo
        let users = await api.Users.all();    
        res.locals.gitlab = api;
    } catch (error) {
        res.locals.gitlab = false;
        console.error(`[ERROR] ${error.description}`);
    }
    next();
};

module.exports = isGitlabON;