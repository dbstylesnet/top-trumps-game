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
        border-radius: 12px;
        padding: 20px 35px;
        max-width: 550px;
        width: 100%;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.4s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap;
        
        &.player-one-turn {
            background: linear-gradient(135deg, rgba(0, 191, 255, 0.25) 0%, rgba(0, 191, 255, 0.1) 100%);
            border: 2px solid #00BFFF;
            box-shadow: 0 4px 20px rgba(0, 191, 255, 0.4);
        }
        
        &.player-two-turn {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.25) 0%, rgba(255, 152, 0, 0.1) 100%);
            border: 2px solid #ff9800;
            box-shadow: 0 4px 20px rgba(255, 152, 0, 0.4);
        }
        
        .player-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 20px;
            background: rgba(0, 0, 0, 0.3);
        }
        
        .player-icon-small {
            font-size: 18px;
        }
        
        .player-name {
            font-weight: 700;
            letter-spacing: 1px;
        }
        
        &.player-one-turn {
            .player-name {
                color: #00BFFF;
                text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
            }
        }
        
        &.player-two-turn {
            .player-name {
                color: #ff9800;
                text-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
            }
        }
        
        .instruction-text {
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
        }
    }
    
    .winner-message {
        border-radius: 12px;
        padding: 30px 45px;
        max-width: 650px;
        width: 100%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        animation: fadeIn 0.5s ease-in;
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.25) 0%, rgba(0, 191, 255, 0.25) 100%);
        border: 2px solid #4CAF50;
        
        .winner-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        
        .winner-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 2rem;
            font-weight: 700;
            padding: 12px 24px;
            border-radius: 25px;
            background: rgba(0, 0, 0, 0.4);
            letter-spacing: 2px;
            
            .player-icon-small {
                font-size: 24px;
            }
            
            &.player-one-badge {
                color: #00BFFF;
                border: 2px solid #00BFFF;
                box-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
                text-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
            }
            
            &.player-two-badge {
                color: #ff9800;
                border: 2px solid #ff9800;
                box-shadow: 0 0 20px rgba(255, 152, 0, 0.5);
                text-shadow: 0 0 15px rgba(255, 152, 0, 0.6);
            }
        }
        
        .draw-badge {
            display: inline-block;
            font-size: 2rem;
            font-weight: 700;
            padding: 12px 24px;
            border-radius: 25px;
            background: rgba(0, 0, 0, 0.4);
            color: #888;
            border: 2px solid #888;
            box-shadow: 0 0 20px rgba(136, 136, 136, 0.3);
        }
        
        .winner-detail {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            margin-top: 8px;
        }
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
        background: linear-gradient(90deg, #4CAF50, #00BFFF);
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
