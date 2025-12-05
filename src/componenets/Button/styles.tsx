import styled from 'styled-components'

const ButtonStyles = styled.button`
    background-color: #212121;
    border: 1px solid #4CAF50;
    border-radius: 5px;
    color: #4CAF50;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    min-width: 200px;
    
    &:hover {
        background-color: #4CAF50;
        color: #212121;
    }
    
    &:focus {
        outline: none;
    }
    
    div {
        padding: 0 0 10px 0 ;
    }
`

export default ButtonStyles
