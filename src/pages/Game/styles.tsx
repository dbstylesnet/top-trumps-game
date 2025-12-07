import styled from 'styled-components'

const GamePage = styled.div`
    padding: 20px 0;
    max-width: 1400px;
    margin: 0 auto;
    
    .cards {
        display:flex;
        flex: 1;
        .left {
            display:flex;
            flex-direction: column;
            width: 50%;
        }
        .right {
            display:flex;
            flex-direction: column;
            width: 50%;
        }
    }

    .cards-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        align-items: stretch;
        padding: 20px 0;
        animation: fadeIn 0.5s ease-in;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 15px 0;
        }
        
        div {
            flex: 0 1 auto;
        }
    }
    
    h2 {
        animation: slideIn 0.4s ease-out;
    }
`

export default GamePage
