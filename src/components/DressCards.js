import React, { useState } from 'react'
import DressCard from './DressCard'
import TinderCard from 'react-tinder-card'
import '../style/card.css'


export default function DressCards() {
    const [dresses, setDresses] = useState([
        { id: 1, title: "Dress Nr1", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/511e%2BPmGXEL._AC_UX679_.jpg" },
        { id: 2, title: "Dress Nr2", imgUrl: "https://m.media-amazon.com/images/I/51gmYyhP6NL._MCnd_SEARCH281250_AC_UL480_QL65_.jpg" },
        { id: 3, title: "Dress Nr3", imgUrl: "https://m.media-amazon.com/images/I/616DzyWBFgL._MCnd_SEARCH281250_AC_UL480_QL65_.jpg" }
    ])

    const swiped = (direction, nameToDeLeft) => {
        console.log("removing", nameToDeLeft)
    }

    const outOffFrame = (name) => {
        console.log(name)
    }

    return (
        <div className="dress-cards">
            {dresses.map((dress) => (
                <TinderCard
                    className="swipe"
                    key={dress.id}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, dress.id)}
                    onCardLeftScreen={() => outOffFrame(dress.id)}
                >
                    <DressCard key={dress.id} dress={dress} />
                </TinderCard>
            ))}
        </div>
    )
}
