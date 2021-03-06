import styled from 'styled-components'

const CardStyles = styled.div`
    color: white;
    width: 200px;
    padding: 15px;
    border: 1px solid #00805c;
    margin: 50px auto;
    background: rgba(0, 0, 0, .1);
    &:hover {
        background: rgba(0, 0, 0, .3);
        transition: background 0.2s ease-in-out;
        cursor: pointer;
    }
    div {
        padding: 0 0 10px 0 ;
    }
`

export default CardStyles
