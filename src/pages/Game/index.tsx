import React, { useState, useEffect, useCallback } from 'react';
import GamePage from './styles';
import { useQuery } from '@apollo/client'
import { GET_STARSHIPS_AND_PEOPLE } from '../../consts'
import Card from '../../componenets/Card'

interface Starship {
    id: string,
    index: number,
    name: string,
    hyperdriveRating: number,
}

interface People {
    id: string,
    index: number,
    name: string,
    height: number,
}

interface GameState {
    scores?: number[],
    scoreI?: number,
    scoreII?: number,
    playing?: boolean,
    playerITurn?: boolean,
}

type GameProps = {}

type BtnProps = {
    callback?: any
}


const Game: React.FC<GameProps> = ({}) => {
    const { loading, error, data } = useQuery(GET_STARSHIPS_AND_PEOPLE)
    const [gameState, setGameState] = useState<GameState>(
        { 
            scores: [],
            scoreI: 0,
            scoreII: 0,
            playing: false,
            playerITurn: false
        }
    ) 
    
    const updFun = () => {
        setGameState({
            scores: [],
            playing: false,
            playerITurn: false 
        })
        console.log('re-rendered component')
    }
    
    const clickedGame = useCallback(e => {
        setGameState({
            scores: [],
            playing: false,
            playerITurn: false 
        })
        console.log(gameState.scores)
        console.log('re-rendered component')
    }, [])
    
    useEffect(() => {
        console.log(gameState.scores)
    },[])
    
    
    const Buttonn:React.FC<BtnProps> = React.memo(({ callback }) => (
        <button onClick={callback}>
            Clicked memo button
            {console.log('re-render btn')}
        </button>
    ))


    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    let i:number = 1, j:number = 1

    const allStarships = data.allStarships
        .slice()
        .sort(()=> 0.5 - Math.random())
        .slice(0, 2)
        .map((starship: Starship) => ({...starship, index:i++}))

    const allPeople = data.allPersons
        .slice()
        .sort(()=> 0.5 - Math.random())
        .slice(0, 2)
        .map((people: People) => ({...people, index:j++}))
        
    return (
        <GamePage>
            <header className="header">
                Top Trumps
            </header>
            <div className="score">
                <div className="title">Score:</div>
                <ul>
                    <li>I: {gameState.scoreI}</li>
                    <li>II: {gameState.scoreII}</li>
                </ul>
            </div>
            <div className="players">
                <ul>
                    <li>Player I</li>
                    <li>Player II</li>
                </ul>
            </div>

            <div>Starships</div>
            <div className="cards-container">
            {allStarships
                .map((starship: Starship) => (
                    <div key={starship.id} className="starships"> 
                        <Card
                            cardType="Starship" 
                            attribute="Drive" 
                            name={starship.name} 
                            attrValue={starship.hyperdriveRating} 
                            player={starship.index} 
                            funcThatUpdates={updFun} 
                        />
                    </div>
                )
            )}
            </div>

            <div></div>
                    
            <div>People</div>
            <div className="cards-container">
            {allPeople
                .map((people: People) => (
                    <div 
                        key={people.id} 
                        className="people"
                    > 
                        <Card
                            cardType="People" 
                            attribute="Height" 
                            name={people.name} 
                            attrValue={people.height} 
                            player={people.index}
                            funcThatUpdates={updFun} 
                        />
                    </div>
                )
            )}
            </div>
            
            <div >{`Player ${gameState.playing ? 'I': 'II'} chooses card`}
            Player I wins, choose the card
            </div>


            <Buttonn callback={(clickedGame)} />

            <button onClick={clickedGame}>
                Clicked game
            </button>


            <div>Score: {gameState.scores}</div>
            <div>scoreI: {gameState.scoreI}</div>
            <div>scoreII: {gameState.scoreII}</div>
            <div>playerITurn: {gameState.playerITurn ? 'Yes' : 'No'}</div>
        </GamePage>
    );
}

export default Game
