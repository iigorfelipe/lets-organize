const express = require('express');

const controller = require('../controllers/task');

const taskRoute = express.Router();

taskRoute.get('/', controller.create);

module.exports = taskRoute;
