const Docker = require('dockerode');

const isDockerON = async function (req, res, next) {
    const docker = new Docker({
        protocol: process.env.DOCKER_PROTOCOL || 'http',
        host: process.env.DOCKER_HOST || 'localhost',
        port: process.env.DOCKER_PORT || 2375
    });
    try {
        await docker.ping().then(data => {
            res.locals.docker = true
        });       
    } catch (error) {
        console.error(`[ERROR] ${error.code} - No es posible conectarse al socket de Docker`);
        res.locals.docker = false
    }
    next();
};

module.exports = isDockerON;