import styled from 'styled-components'

const HeaderStyles = styled.div`
    .header {
        background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
        min-height: 12vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        border-bottom: 2px solid #4CAF50;
        
        .main-title {
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            background: linear-gradient(90deg, #4CAF50, #61dafb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    .score-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin: 30px auto;
        flex-wrap: wrap;
        max-width: 1200px;
    }

    .start-new-game-button,
    .history-link {
        position: relative;
        
        button {
            margin: 0;
            min-width: auto;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 600;
        }
    }
    
    .history-link {
        .history-dropdown {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            background: linear-gradient(135deg, rgba(30, 30, 46, 0.95) 0%, rgba(45, 45, 68, 0.95) 100%);
            border: 2px solid #4CAF50;
            border-radius: 12px;
            padding: 20px;
            min-width: 280px;
            max-width: 400px;
            max-height: 400px;
            overflow-y: auto;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            z-index: 1000;
            animation: fadeIn 0.3s ease-in;
            
            .history-title {
                font-size: 18px;
                font-weight: 700;
                color: #4CAF50;
                margin-bottom: 15px;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 1px;
                padding-bottom: 10px;
                border-bottom: 2px solid rgba(76, 175, 80, 0.3);
            }
            
            .history-scores {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .history-item {
                padding: 10px 15px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                border-left: 3px solid #4CAF50;
                font-size: 14px;
                color: #ccc;
                transition: all 0.2s ease;
                
                &:hover {
                    background: rgba(76, 175, 80, 0.2);
                    transform: translateX(5px);
                }
            }
            
            .history-empty {
                text-align: center;
                color: #888;
                font-style: italic;
                padding: 20px;
            }
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

    .score {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(97, 218, 251, 0.15) 100%);
        border: 2px solid #4CAF50;
        border-radius: 12px;
        width: 280px;
        color: white;
        padding: 20px;
        font-size: 18px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
        backdrop-filter: blur(10px);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
        }
        
        .title {
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 15px;
            color: #4CAF50;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

    .score ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        gap: 20px;
        
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px 25px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 10px;
            min-width: 100px;
            border: 2px solid rgba(76, 175, 80, 0.3);
            transition: all 0.2s ease;
            
            &:first-child {
                border-color: rgba(97, 218, 251, 0.5);
                background: rgba(97, 218, 251, 0.15);
                
                .player-score {
                    color: #61dafb;
                }
            }
            
            &:last-child {
                border-color: rgba(255, 152, 0, 0.5);
                background: rgba(255, 152, 0, 0.15);
                
                .player-score {
                    color: #ff9800;
                }
            }
            
            .player-label {
                font-size: 12px;
                color: #aaa;
                margin-bottom: 8px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 500;
            }
            
            .player-score {
                font-size: 32px;
                font-weight: 700;
                color: #4CAF50;
                line-height: 1;
            }
        }
    }
    
    .players {
        margin-top: 20px;
        
        ul {
            display: flex;
            justify-content: center;
            gap: 40px;
            font-size: 24px;
            list-style-type: none;
            padding: 0;
            margin: 0;
            
            li {
                padding: 10px 30px;
                background: rgba(76, 175, 80, 0.1);
                border-radius: 8px;
                border: 1px solid rgba(76, 175, 80, 0.3);
                font-weight: 500;
                letter-spacing: 1px;
                
                &:first-child {
                    border-color: rgba(97, 218, 251, 0.5);
                    background: rgba(97, 218, 251, 0.1);
                }
                
                &:last-child {
                    border-color: rgba(255, 152, 0, 0.5);
                    background: rgba(255, 152, 0, 0.1);
                }
            }
        }
    }
`

export default HeaderStyles
