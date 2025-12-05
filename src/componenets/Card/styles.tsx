import styled from 'styled-components';

const CardStyles = styled.div.withConfig({
  shouldForwardProp: (prop) => (prop as string) !== 'disabled',
})<{ disabled: boolean }>`
  color: white;
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  padding: 15px;
  border: 1px solid #00805c;
  margin: 0;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)'};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    transition: background 0.2s ease-in-out;
  }

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 250px;
    max-width: 250px;
  }

  div {
    padding: 0 0 10px 0;
  }
`;

export default CardStyles;
