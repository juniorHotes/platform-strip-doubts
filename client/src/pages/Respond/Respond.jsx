import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'

import api from '../../services/api'

export default function Respond(props) {
    const history = useHistory();

    const [getQuestion, setQuestion] = useState([])
    const [getResposes, setResposes] = useState([])

    const [getResponse, setResponse] = useState('')
    const [getQuestionID, setQuestionID] = useState(0)

    useEffect(async () => {
        await api.get(props.location.pathname).then(res => {
            const { questions, response } = res.data

            setQuestion(questions)
            setResposes(response)

            setQuestionID(questions.id)
        })

    }, [])

    function newResponse() {
        api.post('question/response', {
            body: getResponse,
            questionID: getQuestionID
        }).then(() => {
            alert('Sua resposta foi salva!')
            history.push(history.location.pathname);
        }).catch((err) => {
            alert('Erro ao responder esta pergunta: ' + err)
        })
    }
    function renderResponses() {
        return getResposes.map(item => {
            return (
                <div className="card-body card-response" key={item.id}>
                    <h4>Um usuário respondeu</h4>
                    <p>{item.body}</p>
                    <span>
                        Postado em: {item.createdAt}
                    </span>
                </div>
            )
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>{getQuestion.title}</h2>
                    </div>

                    <div className="card-body" key={getQuestion.id}>
                        <p>{getQuestion.description}</p>
                        <div className="card-body">
                            <form onSubmit={newResponse}>
                                <textarea className="form-control"
                                    value={getResponse}
                                    onChange={(e) => setResponse(e.target.value)}
                                    name="body"
                                    placeholder="Responda esta pergunta" required
                                >
                                </textarea>
                                <input type="hidden" name="questionID" value={getQuestion.id} />
                                <input type="submit" className="btn btn-primary" value="Responder" />
                                <span>
                                    Postado em: {getQuestion.createdAt}
                                </span>

                            </form>
                        </div>
                    </div>
                    {renderResponses()}
                </div>
            </div>
        </>
    )
}
