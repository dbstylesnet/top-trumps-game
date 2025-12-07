import styled from 'styled-components'

const ButtonStyles = styled.button`
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(97, 218, 251, 0.15) 100%);
    border: 2px solid #4CAF50;
    border-radius: 10px;
    color: #4CAF50;
    padding: 14px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 4px 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 200px;
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }
    
    &:hover {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(97, 218, 251, 0.3) 100%);
        border-color: #61dafb;
        color: #61dafb;
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 10px rgba(76, 175, 80, 0.3);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
    }
    
    div {
        padding: 0 0 10px 0 ;
    }
`

export default ButtonStyles
