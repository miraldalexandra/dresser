import React from 'react'

export default function DressCard({ dress }) {
    return (
        <div className="dress-card">
            <h3>{dress.title}</h3>
            <div className="card-img-container">
                <img src={dress.imgUrl} alt="dress" />
            </div>
        </div>
    )
}
