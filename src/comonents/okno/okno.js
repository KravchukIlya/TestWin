import React, { useState } from 'react'
import './style.scss'
import sravnit from '../../img/sravnit.svg'
import like from '../../img/like.svg'
import znachokDostavki from '../../img/znachokDostavki.svg'
import znachokSdelki from '../../img/znachokSdelki.svg'
import sravnitSin from '../../img/sravnitSin.svg'
import likeSin from '../../img/likeSin.svg'
import znachokDostavkiSin from '../../img/znachokDostavkiSin.svg'
import znachokSdelkSini from '../../img/znachokSdelkSini.svg'

export const Window = ({ item }) => {
    const [vizibl, setVizibl] = useState(item.seen)
    const [sravColor, setSravColor] = useState(false)
    const [likColor, setLikColor] = useState(false)
    const [sdelColor, setSdelColor] = useState(false)
    const [dosColor, setDosColor] = useState(false)

    return (
        <>
            <div
                className="block__okno__info"
                onClick={() => setVizibl(!item.seen)}
            >
                <div className="block__okno__img">
                    <div
                        className="block__okno__img"
                        style={{
                            backgroundImage:
                                'url("https://source.unsplash.com/random")',
                        }}
                    ></div>

                    {vizibl ? (
                        <div className="block__okno__pros">
                            <span>Просмотрено</span>
                        </div>
                    ) : null}

                    <div className="block__okno__svg">
                        <div onClick={() => setSravColor(true)}>
                            {sravColor ? (
                                <img src={sravnitSin} alt="" />
                            ) : (
                                <img src={sravnit} alt="" />
                            )}
                        </div>

                        <div onClick={() => setLikColor(!likColor)}>
                            {likColor ? (
                                <img src={likeSin} alt="" />
                            ) : (
                                <img src={like} alt="" />
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className="block__info"
                    style={{ background: vizibl ? '#FFF6A5' : '#FFFFFF' }}
                >
                    <div className="block__info__price__svg">
                        <div className="block__info__price">
                            <div className="old__price">{item.oldPrice}</div>
                            <div className="price">{item.price}</div>
                        </div>
                        <div className="block__info__svg">
                            <div onClick={() => setDosColor(true)}>
                                {dosColor ? (
                                    <img src={znachokDostavkiSin} alt="" />
                                ) : (
                                    <img src={znachokDostavki} alt="" />
                                )}
                            </div>

                            <div onClick={() => setSdelColor(true)}>
                                {sdelColor ? (
                                    <img src={znachokSdelkSini} alt="" />
                                ) : (
                                    <img src={znachokSdelki} alt="" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="block__info__name">{item.title}</div>
                    <div className="block__info__sity">
                        <div>{item.locality}</div>
                        <div>{item.date}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
