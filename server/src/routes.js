const express = require('express')
const routes = express.Router()
const connection = require('./database/connection')

const QuestionController = require('./database/controllers/QuestionController')
const ResponseController = require('./database/controllers/ResponseController')

connection.authenticate()
    .then(() => console.log('Authenticate: OK!'))
    .catch((err) => console.log('Authenticate error: ' + err))

routes.get('/:search?', QuestionController.index)
routes.post('/newquestion', QuestionController.saveQuestion)

routes.get('/question/:id', ResponseController.index)
routes.post('/question/response', ResponseController.saveResponse)

module.exports = routes