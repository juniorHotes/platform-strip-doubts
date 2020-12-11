import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

export default function Navbar(props) {
    const [getQuery, setQuery] = useState('')

    async function submit(e) {
        e.preventDefault()

        // Search filter
        const value = getQuery == "" ? "/" : getQuery

        await api.get(value).then(response => {
            const data = value == "/" ? response.data.questions : response.data.questions.rows
            props.navSearch(data)
        })
    }

    function inputSearch() {
        if (props.search) {
            return (
                <form onSubmit={submit}>
                    <input type="search"
                        name="search"
                        value={getQuery}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                    />
                    <button type="submit"></button>
                </form>
            )
        }
    }
    return (
        <div className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">
                <h3 className="text-light" 
                    onClick={Element => {
                    if (props.search) {
                        setQuery('')
                        Element.target.offsetParent.lastChild.lastChild.click()
                    }
                }}>Ask-Me</h3>
            </Link>
            {inputSearch()}
        </div>
    )
}