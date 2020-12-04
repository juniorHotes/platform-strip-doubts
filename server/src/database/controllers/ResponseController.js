const Response = require('../migrations/response')
const Question = require('../migrations/question')

const index = async (req, res) => {
    const id = req.params.id

    if (isNaN(id)) {
        return res.sendStatus(400)
    }

    try {
        await Question.findOne({
            where: { id: id }
        }).then(questions => {
            if (questions != undefined) {
                Response.findAll({
                    where: { questionID: questions.id },
                    order: [['id', 'DESC']]
                }).then(response => {
                    res.send({
                        questions,
                        response
                    })
                })
            } else {
                res.sendStatus(404)
            }
        })
    } catch (err) {
        console.log("Request error: " + err)
        res.sendStatus(404)
    }
}

const saveResponse = async (req, res) => {
    const body = req.body.body
    const questionID = req.body.questionID

    await Response.create({
        body,
        questionID
    }).then(() => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log("Error saving response: " + err)
        res.sendStatus(404)
    })
}

module.exports = {
    index,
    saveResponse
}
