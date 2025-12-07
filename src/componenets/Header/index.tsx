import React, { useState, useContext } from 'react'
import HeaderStyles from './styles'
import { HistoryContext } from '../../HistoryContext'
import Button from '../Button'

type HeaderProps = {
    scores?: string[],
    scoreI: number,
    scoreII: number,
    onStartOver?: () => void,
}

const Header = ({ scores, scoreI, scoreII, onStartOver }: HeaderProps) => {
    const { historyScores } = useContext(HistoryContext)
    const [showHistory, setShowHistory] = useState(false)

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
                <div className="title">Score</div>
                <ul>
                    <li>
                        <span className="player-label">Player I</span>
                        <span className="player-score">{scoreI}</span>
                    </li>
                    <li>
                        <span className="player-label">Player II</span>
                        <span className="player-score">{scoreII}</span>
                    </li>
                </ul>
            </div>
            <div 
                className="history-link"
                onMouseEnter={() => setShowHistory(true)}
                onMouseLeave={() => setShowHistory(false)}
            >
                <Button callback={() => {}} text="Results" />
                {showHistory && (
                    <div className="history-dropdown">
                        <div className="history-title">Game History</div>
                        {historyScores && historyScores.length > 0 ? (
                            <div className="history-scores">
                                {historyScores.map((score: string, index: number) => (
                                    <div key={index} className="history-item">
                                        Round {index + 1}: {score === 'I' ? 'Player I' : score === 'II' ? 'Player II' : 'Draw'}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="history-empty">No history yet</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </HeaderStyles>
}

export default Header
