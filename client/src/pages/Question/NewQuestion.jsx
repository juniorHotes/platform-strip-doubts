import React, { useState} from 'react'
import Navbar from '../../components/Navbar'

import api from '../../services/api'

export default function AskQuestion() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function newQuestion() {
        await api.post('newquestion', {
            title,
            description
        }).then(() => {
            alert('Sua pergunta foi salva!');
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Faça uma pergunta</h3>
                    </div>

                    <div className="card-body">
                        <form onSubmit={newQuestion}>
                            <label htmlFor="titulo">Título</label>
                            <input className="form-control" type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="title"
                                placeholder="Título" required
                            />

                            <label htmlFor="">Descrição</label>
                            <textarea className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="description"
                                placeholder="Descreva sua pergunta" required
                            >
                            </textarea>
                            <input type="submit" className="btn btn-primary" value="Perguntar" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
