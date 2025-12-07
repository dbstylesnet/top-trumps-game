import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 2% 6%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
        background-attachment: fixed;
        color: white;
        text-align: center;
        min-height: 100vh;
    }
      
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    
    a {
        color: #61dafb;
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover {
            color: #4CAF50;
        }
    }

    button {
        color: white;
    }
    
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 30px 0;
        background: linear-gradient(90deg, #4CAF50, #61dafb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 2px;
    }
    
    h2 {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 20px 0;
        color: #61dafb;
    }
    
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #ccc;
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
`

export default GlobalStyle
