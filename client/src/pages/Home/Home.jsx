import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

import api from '../../services/api'

export default function Home() {
    const [getQuestions, setGetQuestions] = useState([])

    useEffect(async () => {
        await api.get('/').then(response => {
            const data = response.data.questions
            setGetQuestions(data)
        })

    }, [])

    function showAllQuestions() {
        if (getQuestions.length == 0)
            return <h2 style={{ textAlign: 'center' }}>Não encontramos nem uma pergunta!</h2>

        return getQuestions.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-header">
                        <h3>{item.title}</h3>
                    </div>

                    <div className="card-body">
                        <p>{item.description}</p>
                    </div>
                    <div className="quote-footer">
                        <Link className="btn btn-primary" to={`/question/${item.id}`}>Responder</Link>
                        <span>
                            Postado em: {item.createdAt.split('T')[0]}
                        </span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="header-question">
                    <h2>Perguntas</h2>
                    <Link to={`/newquestion`} className="btn btn-success">Fazer uma pergunta</Link>
                </div>
                {showAllQuestions()}
            </div>
        </div>
    )
}

