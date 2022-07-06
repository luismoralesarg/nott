const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const CRUD = require('easy-express-crud-generator');
const app = express()
const { database } = require('./config/database');
const projectSchema = require('./models/project');
const PORT = process.env.PORT || 3000
// Routes
const ProjectRouter =  require('./routes/project');
// Middlewares
const LoggerMiddleware = require('./middlewares/Logger');
// const Docker = require('./middlewares/isDockerEnable');
const GitlabMiddleware = require('./middlewares/isGitlabEnable');

app.use(cors());
app.use(express.json());


// Models 
const projectModel = mongoose.model('Project', projectSchema);
//const projectRouter = new CRUD(projectModel).getRouter(express.Router());

database(app);

const router = express.Router();

router.use('/nott', 
LoggerMiddleware,
GitlabMiddleware,
ProjectRouter
);

app.use(router);

app.listen(PORT, () => {
    console.log(`App disponible en: http://localhost:${PORT}`);
});


