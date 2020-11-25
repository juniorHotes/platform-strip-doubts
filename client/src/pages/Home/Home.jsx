import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

export default function Home() {
    const [getQuestions, setGetQuestions] = useState([])

    useEffect(async () => {
        await api.get('/').then(response => {
            const data = Object.values(response.data.questions)
            setGetQuestions(data)
        })

    }, [])

    function maps() {
        return getQuestions.map(item => {
            return (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span>
                        Postado em: {item.createdAt}
                    </span>
                    <Link to={`/question/${item.id}`}>Responder</Link>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Home page</h1>
            {maps()}
        </div>
    )
}

