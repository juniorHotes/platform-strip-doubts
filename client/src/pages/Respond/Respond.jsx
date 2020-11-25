import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

export default function Respond(params) {
    const [getQuestions, setGetQuestions] = useState()

    console.log(params.location.pathname)

    useEffect(async () => {
        await api.get(params.location.pathname).then(response => {
            console.log(response.data.questions)
            // const data = Object.values(response.data.questions)
            // setGetQuestions(data)
        })

    }, [])

    return (
        <div>
            <h1>Home Respond</h1>
        </div>
    )
}
