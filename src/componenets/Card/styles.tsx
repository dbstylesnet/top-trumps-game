import styled from 'styled-components';

const CardStyles = styled.div.withConfig({
  shouldForwardProp: (prop) => (prop as string) !== 'disabled',
})<{ disabled: boolean }>`
  color: white;
  width: 200px;
  padding: 15px;
  border: 1px solid #00805c;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.1);

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)'};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    transition: background 0.2s ease-in-out;
  }

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  div {
    padding: 0 0 10px 0;
  }
`;

export default CardStyles;
