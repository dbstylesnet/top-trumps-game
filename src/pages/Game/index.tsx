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

type Category = 'starships' | 'persons' | null;

interface GameState {
  scores: string[];
  scoreI: number;
  scoreII: number;
  isPlayerITurn: boolean;
  isTurnStarted: boolean;
  selectedCategory: Category;
  starships: Starship[];
  persons: Person[];
  winnerMessage: string | null;
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
    selectedCategory: null,
    starships: [],
    persons: [],
    winnerMessage: null,
  });

  useEffect(() => {
    if (data) {

      // console.log("data:", data);
      setGameState((prev) => ({
        ...prev,
        starships: data.allStarships.starships,
        persons: data.allPeople.people,
      }));
    }
  }, [data]);

  const onCategorySelect = (category: 'starships' | 'persons') => {
    setGameState((prev) => ({
      ...prev,
      selectedCategory: category,
    }));
  };

  const onTurnStart = () => {
    if (!data || !gameState.selectedCategory) return;

    if (gameState.selectedCategory === 'starships') {
      const assignedStarships = [...data.allStarships.starships]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setGameState((prev) => ({
        ...prev,
        isTurnStarted: true,
        starships: assignedStarships,
        persons: [],
        winnerMessage: null,
      }));
    } else {
      const assignedPersons = [...data.allPeople.people]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setGameState((prev) => ({
        ...prev,
        isTurnStarted: true,
        starships: [],
        persons: assignedPersons,
        winnerMessage: null,
      }));
    }
  };

const handleClick = () => {
  if (!gameState.selectedCategory) return;

  const isStarship = gameState.selectedCategory === 'starships';
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

  const winnerMessage = winner === 'D' ? 'Draw!' : `Player ${winner} wins!`;

  const scores = [...gameState.scores, winner];

  setGameState((prev) => ({
    ...prev,
    scores,
    scoreI: winner === 'I' ? prev.scoreI + 1 : prev.scoreI,
    scoreII: winner === 'II' ? prev.scoreII + 1 : prev.scoreII,
    isPlayerITurn: winner === 'I' || (winner === 'D' && prev.isPlayerITurn),
    isTurnStarted: false,
    winnerMessage,
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
      selectedCategory: null,
      starships: [],
      persons: [],
      winnerMessage: null,
    });
    setHistoryScores([]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Show category selection if no category is selected
  if (!gameState.selectedCategory) {
    return (
      <GamePage>
        <Header
          scores={gameState.scores}
          scoreI={gameState.scoreI}
          scoreII={gameState.scoreII}
          onStartOver={onStartOver}
        />
        <h1>Select Category</h1>
        <p>Choose a category to play with:</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          <Button callback={() => onCategorySelect('starships')} text="Starships" />
          <Button callback={() => onCategorySelect('persons')} text="Persons" />
        </div>
      </GamePage>
    );
  }

  return (
    <GamePage>
      <Header
        scores={gameState.scores}
        scoreI={gameState.scoreI}
        scoreII={gameState.scoreII}
        onStartOver={onStartOver}
      />

      {gameState.isTurnStarted && (
        <h2>Player {gameState.isPlayerITurn ? 'I' : 'II'} chooses card</h2>
      )}

      {gameState.winnerMessage && (
        <h2 style={{ color: '#61dafb', textAlign: 'center', margin: '20px 0' }}>
          {gameState.winnerMessage}
        </h2>
      )}

      <Button callback={onTurnStart} text="Draw new cards" />

      {<h1>All cards</h1>}

      {gameState.selectedCategory === 'starships' && gameState.starships.length > 0 && <h2>Starships</h2>}
      {gameState.selectedCategory === 'starships' && (
        <div className="cards-container">
          {gameState.starships.map((starship, index) => (
            <Card
              key={starship.id}
              onCardClick={handleClick}
              playerITurn={gameState.isPlayerITurn}
              isTurnStarted={gameState.isTurnStarted}
              cardType="Starship"
              attribute="Drive"
              name={starship.name}
              attrValue={starship.hyperdriveRating}
              playerIndex={index}
            />
          ))}
        </div>
      )}

      {gameState.selectedCategory === 'persons' && gameState.persons.length > 0 && <h2>Persons</h2>}
      {gameState.selectedCategory === 'persons' && (
        <div className="cards-container">
          {gameState.persons.map((person, index) => (
            <Card
              key={person.id}
              onCardClick={handleClick}
              playerITurn={gameState.isPlayerITurn}
              isTurnStarted={gameState.isTurnStarted}
              cardType="Person"
              attribute="Height"
              name={person.name}
              attrValue={person.height}
              playerIndex={index}
            />
          ))}
        </div>
      )}

    </GamePage>
  );
};

export default Game;
