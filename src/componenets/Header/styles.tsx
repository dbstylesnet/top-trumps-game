import styled from 'styled-components'

const HeaderStyles = styled.div`
    .header {
        // background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
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
            background: linear-gradient(90deg, #4CAF50, #00BFFF);
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
        margin: 50px auto 30px;
        flex-wrap: wrap;
        max-width: 1200px;
    }

    .start-new-game-button,
    .history-link {
        position: relative;
        
        button {
            margin: 0;
            min-width: 200px;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 600;
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(0, 191, 255, 0.15) 100%) !important;
            border: 2px solid #4CAF50 !important;
            color: #4CAF50 !important;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2) !important;
            
            &:hover {
                background: linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(0, 191, 255, 0.3) 100%) !important;
                border-color: #00BFFF !important;
                color: #00BFFF !important;
                box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4) !important;
            }
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
                padding: 12px 15px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                border-left: 4px solid #4CAF50;
                font-size: 14px;
                color: #ccc;
                transition: all 0.2s ease;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                
                &.player-one-win {
                    border-left-color: #00BFFF;
                    background: rgba(0, 191, 255, 0.1);
                    
                    .player-indicator {
                        color: #00BFFF;
                        font-weight: 600;
                    }
                }
                
                &.player-two-win {
                    border-left-color: #ff9800;
                    background: rgba(255, 152, 0, 0.1);
                    
                    .player-indicator {
                        color: #ff9800;
                        font-weight: 600;
                    }
                }
                
                &.draw {
                    border-left-color: #888;
                    background: rgba(136, 136, 136, 0.1);
                    
                    .draw-indicator {
                        color: #888;
                        font-style: italic;
                    }
                }
                
                &:hover {
                    transform: translateX(5px);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                }
                
                .round-number {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    min-width: 70px;
                }
                
                .round-result {
                    flex: 1;
                    text-align: right;
                }
                
                .player-indicator {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 4px;
                    margin-right: 4px;
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
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(0, 191, 255, 0.15) 100%);
        border: 2px solid #4CAF50;
        border-radius: 12px;
        width: auto;
        min-width: 360px;
        max-width: 420px;
        color: white;
        padding: 25px;
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
            margin-bottom: 20px;
            color: #4CAF50;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-align: center;
        }
    }

    .score ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 20px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 12px;
            width: 100%;
            flex: 1;
            min-width: 0;
            border: 2px solid rgba(76, 175, 80, 0.3);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, transparent, currentColor, transparent);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
                
                &::before {
                    opacity: 0.6;
                }
            }
            
            &.player-one {
                border-color: rgba(0, 191, 255, 0.6);
                box-shadow: 0 4px 15px rgba(0, 191, 255, 0.2);
                

                
                .player-icon {
                    border-color: #00BFFF;
                    color: #ffffff;
                    filter: drop-shadow(0 0 4px rgba(0, 191, 255, 0.6));
                }
                
                .player-number {
                    color: #00BFFF;
                    text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
                }
                
                .player-score {
                    color: #00BFFF;
                    text-shadow: 0 0 15px rgba(0, 191, 255, 0.4);
                }
            }
            
            &.player-two {
                border-color: rgba(255, 152, 0, 0.6);
                box-shadow: 0 4px 15px rgba(255, 152, 0, 0.2);
                

                
                .player-icon {
                    border-color: #ff9800;
                    color: #ffffff;
                    filter: drop-shadow(0 0 4px rgba(255, 152, 0, 0.6));
                }
                
                .player-number {
                    color: #ff9800;
                    text-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
                }
                
                .player-score {
                    color: #ff9800;
                    text-shadow: 0 0 15px rgba(255, 152, 0, 0.4);
                }
            }
            
            .player-header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
                width: 100%;
            }
            
            .player-icon {
                font-size: 24px;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 2px solid;
                background: rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
            }
            
            .player-label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2px;
            }
            
            .player-text {
                font-size: 11px;
                color: rgba(255, 255, 255, 0.7);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 600;
            }
            
            .player-number {
                font-size: 24px;
                font-weight: 700;
                line-height: 1;
                transition: all 0.3s ease;
                font-family: 'Georgia', serif;
            }
            
            .player-score {
                font-size: 42px;
                font-weight: 700;
                color: #4CAF50;
                line-height: 1;
                margin-top: 4px;
                transition: all 0.3s ease;
                font-family: 'Arial', sans-serif;
            }
        }
    }
`

export default HeaderStyles
