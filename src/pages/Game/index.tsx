import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STARSHIPS_AND_PEOPLE } from '../../config';
import { HistoryContext } from '../../HistoryContext';
import Card from '../../componenets/Card';
import Button from '../../componenets/Button';
import Header from '../../componenets/Header';
import GamePage from './styles';

interface Starship {
  id: string;
  name: string;
  hyperdriveRating: number;
}

interface Person {
  id: string;
  name: string;
  height: number;
}

type GameItem = Starship | Person;

interface GameState {
  scores: string[];
  scoreI: number;
  scoreII: number;
  isPlayerITurn: boolean;
  isTurnStarted: boolean;
  starships: Starship[];
  persons: Person[];
}

const Game = () => {
  const { loading, error, data } = useQuery(GET_STARSHIPS_AND_PEOPLE);
  const { setHistoryScores } = useContext(HistoryContext);

  const [gameState, setGameState] = useState<GameState>({
    scores: [],
    scoreI: 0,
    scoreII: 0,
    isPlayerITurn: true,
    isTurnStarted: false,
    starships: [],
    persons: [],
  });

  // Update state after data fetch
  useEffect(() => {
    if (data) {
      setGameState((prev) => ({
        ...prev,
        starships: data.allStarships.starships,
        persons: data.allPeople.people,
      }));
    }
  }, [data]);

  const onTurnStart = () => {
    if (!data) return;

    const assignedStarships = [...gameState.starships]
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    const assignedPersons = [...gameState.persons]
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setGameState((prev) => ({
      ...prev,
      isTurnStarted: true,
      starships: assignedStarships,
      persons: assignedPersons,
    }));
  };

const handleClick = (isStarship: boolean) => {
  const playerOne = isStarship
    ? (gameState.starships[0] as Starship)
    : (gameState.persons[0] as Person);
  const playerTwo = isStarship
    ? (gameState.starships[1] as Starship)
    : (gameState.persons[1] as Person);

  const attributeValueI = isStarship
    ? (playerOne as Starship).hyperdriveRating
    : (playerOne as Person).height;
  const attributeValueII = isStarship
    ? (playerTwo as Starship).hyperdriveRating
    : (playerTwo as Person).height;

  const winner =
    attributeValueI > attributeValueII
      ? 'I'
      : attributeValueI < attributeValueII
      ? 'II'
      : 'D';

  const scores = [...gameState.scores, winner];

  setGameState((prev) => ({
    ...prev,
    scores,
    scoreI: winner === 'I' ? prev.scoreI + 1 : prev.scoreI,
    scoreII: winner === 'II' ? prev.scoreII + 1 : prev.scoreII,
    isPlayerITurn: winner === 'I' || (winner === 'D' && prev.isPlayerITurn),
    isTurnStarted: false,
  }));

  setHistoryScores(scores);
};


  const onStartOver = () => {
    setGameState({
      scores: [],
      scoreI: 0,
      scoreII: 0,
      isPlayerITurn: true,
      isTurnStarted: false,
      starships: [],
      persons: [],
    });
    setHistoryScores([]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <GamePage>
      <Header
        scores={gameState.scores}
        scoreI={gameState.scoreI}
        scoreII={gameState.scoreII}
      />

      {gameState.starships.length > 0 && <h2>Starships</h2>}
      <div className="cards-container">
        {gameState.starships.map((starship, index) => (
          <Card
            key={starship.id}
            onCardClick={() => handleClick(true)}
            playerITurn={gameState.isPlayerITurn}
            isTurnStarted={gameState.isTurnStarted}
            cardType="Starship"
            attribute="Drive"
            name={starship.name}
            attrValue={starship.hyperdriveRating}
            player={index}
          />
        ))}
      </div>

      {gameState.persons.length > 0 && <h2>Persons</h2>}
      <div className="cards-container">
        {gameState.persons.map((person, index) => (
          <Card
            key={person.id}
            onCardClick={() => handleClick(false)}
            playerITurn={gameState.isPlayerITurn}
            isTurnStarted={gameState.isTurnStarted}
            cardType="Person"
            attribute="Height"
            name={person.name}
            attrValue={person.height}
            player={index}
          />
        ))}
      </div>

      {gameState.isTurnStarted && (
        <h2>Player {gameState.isPlayerITurn ? 'I' : 'II'} chooses card</h2>
      )}

      <Button callback={onTurnStart} text="Next turn" />
      <Button callback={onStartOver} text="Start New Game" />
      <span>made by dbstyles</span>
    </GamePage>
  );
};

export default Game;
