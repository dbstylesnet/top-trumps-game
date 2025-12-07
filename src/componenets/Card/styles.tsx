import styled from 'styled-components';

const CardStyles = styled.div`
  color: white;
  min-width: 200px;
  max-width: 320px;
  width: 100%;
  padding: 20px;
  border: 2px solid #4CAF50;
  border-radius: 12px;
  margin: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(30, 30, 46, 0.5) 100%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
    border-color: #61dafb;
  }

  .card-name {
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #4CAF50;
    text-align: center;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #4CAF50, #61dafb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .attributes-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .attribute {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(76, 175, 80, 0.2);
    transition: all 0.2s ease-in-out;

    &.clickable {
      cursor: pointer;
      border: 1px solid rgba(76, 175, 80, 0.4);

      &:hover {
        background: rgba(76, 175, 80, 0.25);
        border-color: #4CAF50;
        transform: translateX(5px);
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
      }
    }

    &.selected {
      background: linear-gradient(135deg, rgba(76, 175, 80, 0.4) 0%, rgba(97, 218, 251, 0.4) 100%);
      border: 2px solid #4CAF50;
      box-shadow: 0 0 15px rgba(76, 175, 80, 0.5);
      transform: scale(1.02);
    }

    .attribute-name {
      font-weight: 600;
      text-transform: capitalize;
      font-size: 14px;
      color: #ccc;
    }

    .attribute-value {
      font-weight: 700;
      font-size: 18px;
      color: #4CAF50;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 280px;
    max-width: 280px;
  }
`;

export default CardStyles;
