import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [getQuery, setQuery] = useState('')

    return (
        <div className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">
                <h3>Myblog</h3>
            </Link>
            <form>
                <input type="search"
                    name="search"
                    value={getQuery}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}