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
        })
    } catch (err) {
        console.log('Error creating question: ' + err)
        res.sendStatus(404)
    }
}

const search = async (req, res) => {
    const result = req.params.query

    console.log(result)

    // await Question.findAndCountAll({
    //     raw: true, order: [['id', 'DESC']],
    //     where: {
    //         title: {
    //             [Op.like]: '%%'
    //         }
    //     },
    //     offset: 10,
    //     limit: 2
    // }).then(questions => {
    //     res.send({
    //         questions
    //     })
    //     res.statusCode = 200
    // }).catch((err) => {
    //     res.sendStatus(400)
    //     console.log('Error creating question: ' + err)
    // })
}

module.exports = {
    index,
    search,
    saveQuestion
}