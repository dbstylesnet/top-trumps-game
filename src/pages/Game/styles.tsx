import styled from 'styled-components'

const GamePage = styled.div`
    padding: 20px 0;
    max-width: 1400px;
    margin: 0 auto;
    min-height: calc(100vh - 200px);
    
    .game-content {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 30px 20px;
    }
    
    .game-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 30px 0;
    }
    
    .controls-section {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0px 0 20px;
    }
    
    .instruction-message {
        background: linear-gradient(135deg, rgba(97, 218, 251, 0.2) 0%, rgba(76, 175, 80, 0.2) 100%);
        border: 2px solid #61dafb;
        border-radius: 12px;
        padding: 18px 35px;
        max-width: 550px;
        width: 100%;
        font-size: 1.3rem;
        font-weight: 600;
        color: #61dafb;
        text-align: center;
        box-shadow: 0 4px 15px rgba(97, 218, 251, 0.3);
        animation: slideIn 0.4s ease-out;
    }
    
    .winner-message {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(97, 218, 251, 0.2) 100%);
        border: 2px solid #4CAF50;
        border-radius: 12px;
        padding: 25px 45px;
        max-width: 650px;
        width: 100%;
        box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
        font-size: 1.5rem;
        font-weight: 600;
        color: #4CAF50;
        text-align: center;
        animation: fadeIn 0.5s ease-in;
    }
    
    .game-area {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 20px 0;
    }
    
    .category-section {
        display: flex;
        flex-direction: column;
        gap: 30px;
        animation: fadeIn 0.5s ease-in;
    }
    
    .category-title {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin: 0;
        background: linear-gradient(90deg, #4CAF50, #61dafb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 2px;
        animation: slideIn 0.4s ease-out;
    }

    .cards-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
        align-items: stretch;
        padding: 30px 0;
        animation: fadeIn 0.5s ease-in;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding: 20px 0;
        }
        
        div {
            flex: 0 1 auto;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .category-selection {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 37vh;
        padding: 60px 20px;
        gap: 40px;
        animation: fadeIn 0.5s ease-in;
        
        h1 {
            margin: 0;
            font-size: 3rem;
        }
        
        .category-description {
            font-size: 1.3rem;
            color: #ccc;
            margin: 0;
        }
        
        .category-buttons {
            display: flex;
            gap: 40px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
            
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
        }
    }
`

export default GamePage
