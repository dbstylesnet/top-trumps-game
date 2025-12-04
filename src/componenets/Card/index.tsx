import React from 'react';
import CardStyles from './styles';

interface CardProps {
    isTurnStarted: boolean;
    playerITurn: boolean;
    cardType?: string;
    attribute: string;
    attrValue: number;
    name: string;
    playerIndex: number;
    onCardClick?: () => void;
}

const Card = ({
    isTurnStarted,
    playerITurn,
    attribute,
    attrValue,
    name,
    playerIndex,
    onCardClick,
}: CardProps) => {
    // Determine if the attribute should be shown
    const canReveal =
        !isTurnStarted ||
        (playerIndex === 0 && playerITurn) ||
        (playerIndex === 1 && !playerITurn);

    // Only clickable if attribute is hidden (i.e., "?")
    const isDisabled = canReveal;

    return (
        <CardStyles
            disabled={isDisabled}
            onClick={isDisabled ? undefined : onCardClick}
        >
            <div></div>
            <span>Name: {name}</span>
            <div></div>
            <span>
                {attribute}: {canReveal ? attrValue : "?"}
            </span>
        </CardStyles>
    );
};

export default Card;
