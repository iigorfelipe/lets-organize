const express = require('express');

const controller = require('../controllers/task');

const taskRoute = express.Router();

taskRoute.get('/', controller.getAll);

module.exports = taskRoute;
