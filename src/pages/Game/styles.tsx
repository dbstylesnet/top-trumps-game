import styled from 'styled-components'

const GamePage = styled.div`
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
        gap: 20px;
        justify-content: center;
        align-items: stretch;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        
        div {
            flex: 0 1 auto;
        }
    }
`

export default GamePage
