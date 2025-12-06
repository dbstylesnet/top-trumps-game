import styled from 'styled-components';

const CardStyles = styled.div`
  color: white;
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  padding: 15px;
  border: 1px solid #00805c;
  margin: 0;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .card-name {
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #00805c;
  }

  .attributes-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .attribute {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &.clickable {
      cursor: pointer;
      border: 1px solid transparent;

      &:hover {
        background: rgba(76, 175, 80, 0.2);
        border-color: #4CAF50;
      }
    }

    &.selected {
      background: rgba(76, 175, 80, 0.3);
      border: 1px solid #4CAF50;
    }

    .attribute-name {
      font-weight: 500;
      text-transform: capitalize;
    }

    .attribute-value {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 250px;
    max-width: 250px;
  }
`;

export default CardStyles;
