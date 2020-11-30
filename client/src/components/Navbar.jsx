import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [getQuery, setQuery] = useState('')

    return (
        <div className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">
                <h3 className="text-light">Platform Strip Soubts</h3>
            </Link>
            <form>
                <input type="search"
                    name="search"
                    value={getQuery}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                />
            </form>
        </div>
    )
}