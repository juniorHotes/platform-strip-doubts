import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar navbar-light bg-primary">
            <Link className="navbar-brand" to="/">
                <h3>Myblog</h3>
            </Link>
        </div>
    )
}