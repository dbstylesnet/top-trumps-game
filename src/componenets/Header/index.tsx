import React from 'react'
import HeaderStyles from './styles'
import { useHistory } from 'react-router-dom'
import Button from '../Button'

type HeaderProps = {
    scores?: string[],
    scoreI: number,
    scoreII: number,
    onStartOver?: () => void,
}

const Header = ({ scores, scoreI, scoreII, onStartOver }: HeaderProps) => {
    const history = useHistory()

    return <HeaderStyles>
        <header className="header">
            <span className="main-title">Top Trumps Card Game</span>
        </header>
        <div className="score-container">
            {onStartOver && (
                <div className="start-new-game-button">
                    <Button callback={onStartOver} text="Start New Game" />
                </div>
            )}
            <div className="score">
                <div className="title">Score:</div>
                <ul>
                    <li>I: {scoreI}</li>
                    <li>II: {scoreII}</li>
                </ul>
            </div>
            <div className="history-link">
                <Button callback={() => history.push('/history')} text="Results" />
            </div>
        </div>
        <div className="players">
            <ul>
                <li>Player I</li>
                <li>Player II</li>
            </ul>
        </div>
    </HeaderStyles>
}

export default Header
