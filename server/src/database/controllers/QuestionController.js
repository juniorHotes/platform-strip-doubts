const Sequelize = require('sequelize')
const Question = require('../migrations/question')
const Op = Sequelize.Op

const index = async (req, res) => {
    const result = req.params.search

    if(result === undefined) {
        await Question.findAll({ 
            raw: true, 
            order: [['id', 'DESC']], 
            limit: 8 
        })
        .then(questions => {
            res.send({
                questions
            })
            res.statusCode = 200
        }).catch((err) => {
            res.sendStatus(400)
            console.log('Error creating question: ' + err)
        })

    } else {
        await Question.findAndCountAll({
            raw: true, 
            order: [['id', 'DESC']],
            
            where: {
                title: {
                    [Op.like]: `%${result}%`
                }
            },
            limit: 8
        }).then(questions => {
            res.send({
                questions
            })
            res.statusCode = 200
        }).catch((err) => {
            res.sendStatus(400)
            console.log('Error creating question: ' + err)
        })
    
    }
}

const saveQuestion = async (req, res) => {
    const title = req.body.title
    const description = req.body.description

    try {
        await Question.create({
            title,
            description
        }).then(() => {
            res.sendStatus(200)
            console.log('Created question success!')
        })
    } catch (err) {
        console.log('Error creating question: ' + err)
        res.sendStatus(404)
    }
}

module.exports = {
    index,
    saveQuestion,
}