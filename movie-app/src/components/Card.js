import React from 'react'
import './components.css'

function Card(props) {
    return (
        <div class="div-card">
            <div className="card">
                <img src = {props.cards.poster}/>
                <div className="card-container">
                    <h2>{props.cards.title}</h2>
                    <h5>{props.cards.year}</h5>
                    <p>{props.cards.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
