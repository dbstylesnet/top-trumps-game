import React from 'react';
import CardStyles from './styles';

interface Attribute {
    name: string;
    value: number;
}

interface CardProps {
    isTurnStarted: boolean;
    playerITurn: boolean;
    cardType?: string;
    attributes: Attribute[];
    name: string;
    playerIndex: number;
    onAttributeClick?: (attributeName: string) => void;
    selectedAttribute: string | null;
}

const Card = ({
    isTurnStarted,
    playerITurn,
    attributes,
    name,
    playerIndex,
    onAttributeClick,
    selectedAttribute,
}: CardProps) => {
    // Determine if the attributes should be shown
    const canReveal =
        !isTurnStarted ||
        (playerIndex === 0 && playerITurn) ||
        (playerIndex === 1 && !playerITurn);

    return (
        <CardStyles>
            <div className="card-name">Name: {name}</div>
            <div className="attributes-container">
                {attributes.map((attr) => {
                    const isSelected = selectedAttribute === attr.name;
                    const isClickable = !canReveal && isTurnStarted && onAttributeClick;
                    
                    return (
                        <div
                            key={attr.name}
                            className={`attribute ${isSelected ? 'selected' : ''} ${isClickable ? 'clickable' : ''}`}
                            onClick={isClickable ? () => onAttributeClick?.(attr.name) : undefined}
                        >
                            <span className="attribute-name">{attr.name}:</span>
                            <span className="attribute-value">
                                {canReveal ? attr.value : "?"}
                            </span>
                        </div>
                    );
                })}
            </div>
        </CardStyles>
    );
};

export default Card;
