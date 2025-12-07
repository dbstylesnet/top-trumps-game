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
  maxSpeed: number;
  crewSize: number;
  cargoCapacity: number; // Float in GraphQL, number in TypeScript
}

interface Person {
  id: string;
  name: string;
  height: number;
  mass: number;
  birthYear: number;
  forceSensitivity: number;
}

type StarshipAttribute = 'hyperdriveRating' | 'maxSpeed' | 'crewSize' | 'cargoCapacity';
type PersonAttribute = 'height' | 'mass' | 'birthYear' | 'forceSensitivity';

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
  selectedAttribute: string | null;
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
    selectedAttribute: null,
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
    if (data) {
      setGameState((prev) => ({
        ...prev,
        selectedCategory: category,
        starships: category === 'starships' ? data.allStarships.starships : [],
        persons: category === 'persons' ? data.allPeople.people : [],
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        selectedCategory: category,
      }));
    }
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
        selectedAttribute: null,
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
        selectedAttribute: null,
      }));
    }
  };

  const handleAttributeClick = (attributeName: string) => {
    if (!gameState.selectedCategory || !gameState.isTurnStarted) return;

    setGameState((prev) => ({
      ...prev,
      selectedAttribute: attributeName,
    }));

    // Compare the selected attribute
    const isStarship = gameState.selectedCategory === 'starships';
    const playerOne = isStarship
      ? (gameState.starships[0] as Starship)
      : (gameState.persons[0] as Person);
    const playerTwo = isStarship
      ? (gameState.starships[1] as Starship)
      : (gameState.persons[1] as Person);

    let attributeValueI: number;
    let attributeValueII: number;

    if (isStarship) {
      const starshipOne = playerOne as Starship;
      const starshipTwo = playerTwo as Starship;
      attributeValueI = starshipOne[attributeName as StarshipAttribute];
      attributeValueII = starshipTwo[attributeName as StarshipAttribute];
    } else {
      const personOne = playerOne as Person;
      const personTwo = playerTwo as Person;
      attributeValueI = personOne[attributeName as PersonAttribute];
      attributeValueII = personTwo[attributeName as PersonAttribute];
    }

    const winner =
      attributeValueI > attributeValueII
        ? 'I'
        : attributeValueI < attributeValueII
        ? 'II'
        : 'D';

    const attributeDisplayName = attributeName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
    const winnerMessage = winner === 'D' 
      ? `Draw on ${attributeDisplayName}!` 
      : `Player ${winner} wins on ${attributeDisplayName}!`;

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
    if (data) {
      setGameState({
        scores: [],
        scoreI: 0,
        scoreII: 0,
        isPlayerITurn: true,
        isTurnStarted: false,
        selectedCategory: null,
        starships: data.allStarships.starships,
        persons: data.allPeople.people,
        winnerMessage: null,
        selectedAttribute: null,
      });
    } else {
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
        selectedAttribute: null,
      });
    }
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
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          justifyContent: 'center', 
          marginTop: '40px',
          flexWrap: 'wrap'
        }}>
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

      {gameState.isTurnStarted && !gameState.selectedAttribute && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.2) 0%, rgba(76, 175, 80, 0.2) 100%)',
          border: '2px solid #61dafb',
          borderRadius: '10px',
          padding: '15px 30px',
          margin: '20px auto',
          maxWidth: '500px',
          fontSize: '1.3rem',
          fontWeight: 600,
          color: '#61dafb',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(97, 218, 251, 0.3)'
        }}>
          Player {gameState.isPlayerITurn ? 'I' : 'II'} - Click an attribute to compare
        </div>
      )}

      {gameState.winnerMessage && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(97, 218, 251, 0.2) 100%)',
          border: '2px solid #4CAF50',
          borderRadius: '12px',
          padding: '20px 40px',
          margin: '30px auto',
          maxWidth: '600px',
          boxShadow: '0 4px 20px rgba(76, 175, 80, 0.3)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#4CAF50',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          {gameState.winnerMessage}
        </div>
      )}

      <Button callback={onTurnStart} text="Draw new cards" />

      {<h1>All cards</h1>}

      {gameState.selectedCategory === 'starships' && gameState.starships.length > 0 && <h2>Starships</h2>}
      {gameState.selectedCategory === 'starships' && (
        <div className="cards-container">
          {gameState.starships.map((starship, index) => (
            <Card
              key={starship.id}
              onAttributeClick={handleAttributeClick}
              playerITurn={gameState.isPlayerITurn}
              isTurnStarted={gameState.isTurnStarted}
              cardType="Starship"
              attributes={[
                { name: 'hyperdriveRating', value: starship.hyperdriveRating },
                { name: 'maxSpeed', value: starship.maxSpeed },
                { name: 'crewSize', value: starship.crewSize },
                { name: 'cargoCapacity', value: starship.cargoCapacity },
              ]}
              name={starship.name}
              playerIndex={index}
              selectedAttribute={gameState.selectedAttribute}
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
              onAttributeClick={handleAttributeClick}
              playerITurn={gameState.isPlayerITurn}
              isTurnStarted={gameState.isTurnStarted}
              cardType="Person"
              attributes={[
                { name: 'height', value: person.height },
                { name: 'mass', value: person.mass },
                { name: 'birthYear', value: person.birthYear },
                { name: 'forceSensitivity', value: person.forceSensitivity },
              ]}
              name={person.name}
              playerIndex={index}
              selectedAttribute={gameState.selectedAttribute}
            />
          ))}
        </div>
      )}

    </GamePage>
  );
};

export default Game;
