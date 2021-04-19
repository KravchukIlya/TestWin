import './App.scss'
import React, { useState, useEffect } from 'react'
import { Window } from './comonents/okno/okno'
import razvorot from './img/razvorot.svg'

const App = () => {
    const [item, setItem] = useState([])
    const [lenght, setLenght] = useState(16)

    useEffect(() => {
        fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then((res) => res.json())
            .then((data) => setItem(data))
    }, [])

    const newItem = item.map((item) => {
        {
            return { ...item, seen: false }
        }
    })

    return (
        <div className="block">
            <div className="block__text">Похожие объявления</div>

            <div className="block__item">
                {newItem.slice(0, lenght).map((item, idx) => (
                    <Window item={item} key={idx} seen={item.seen} />
                ))}
            </div>
            <div
                className="block__item__click__img"
                onClick={() => {
                    setLenght(92)
                }}
            >
                <span className="block__item__click__text">Показать все</span>
                <img src={razvorot} alt="" />
            </div>
        </div>
    )
}

export default App
