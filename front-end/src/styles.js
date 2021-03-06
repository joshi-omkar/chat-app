import styled,{createGlobalStyle} from 'styled-components'

export const MainContainer = styled.div`
    text-align: center;
    max-width: 728px;
    margin: 0 auto;

  
header {
    height: 10vh;
    min-height: 50px;
    position: fixed;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box; 
  }
  
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
  
  main {
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  
  main::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  main::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  main::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
  
  form {
    height: 10vh;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 728px;
    display: flex;
    font-size: 1.5rem;
  }
  
  form button {
    width: 20%;
  }

  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    outline: none;
    border: none;
    padding: 0 10px;
  }
  
  button {
    background-color: #282c34; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .sign-in {
    color: #282c34;
    background: white;
    max-width: 400px;
    margin: 0 auto;
  }
  
  ul, li {
    text-align: left;
    list-style: none;
  }
  
  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    text-align: center;
    font-family: 'Merriweather Sans', sans-serif;
  }
  
  .message {
    display: flex;
    align-items: center;
  }
  
  
  .sent {
    flex-direction: row-reverse;
  }
  
  .sent p {
    color: white;
    background: #0b93f6;
    align-self: flex-end;
  }
  .received p {
    background: #e5e5ea;
    color: black;
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
`

export const GlobalStyles = createGlobalStyle`

  body{
    background-color: ${props => props.theme.body};
  }
  header{
     background-color: ${props => props.theme.header};
     color: ${props => props.theme.color};
   }

   section {
     background-color:${props => props.theme.section};
   }

   form {
     background-color: ${props => props.theme.form};
   }

   p {
     color: ${props => props.theme.color};
   }

   input {
     background: ${props => props.theme.input};
     color: ${props => props.theme.text};
  }

`

export const lightTheme = {
    body:'#FFFFFF',
    header: '#d6cdea',
    color: '#000',
    text:'#000',
    section :'#bc986a',
    form :'#cdf5f6',
    p :'black',
    input :'#eff9da'
}

export const darkTheme = {
    body:'#121212',
    header: '#000000',
    color: '#fff',
    text:'#fff',
    section :'#181818',
    form :'#282828',
    p :'white',
    input :'#404040'
}
