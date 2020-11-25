const Question = require('../migrations/question')

const index = async (req, res) => {
    await Question.findAll({ raw: true, order: [['id', 'DESC']] })
        .then(questions => {
            res.send({
                questions
            })
            res.statusCode = 200
        }).catch((err) => {
            res.sendStatus(400)
            console.log('Error creating question: ' + err)
        })
}

const saveQuestion = async (req, res) => {
    const title = req.body.title
    const description = req.body.description

    try {
        await Question.create({
            title,
            description
        }).then(() => {
            res.statusCode = 200
            console.log('Created question success!')
            res.redirect('/')
        })
    } catch (err) {
        console.log('Error creating question: ' + err)
        res.sendStatus(404)
    }
}

module.exports = {
    index,
    saveQuestion
}