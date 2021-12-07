import React, {useState, useRef} from "react"
// import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {MainContainer, lightTheme, darkTheme, GlobalStyles} from './styles'
import { ThemeProvider } from "styled-components";


import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCsQlKyHXZ66jzDGni0FSD1BJXkUwv1KVY",

  authDomain: "chat-app-15e0d.firebaseapp.com",

  projectId: "chat-app-15e0d",

  storageBucket: "chat-app-15e0d.appspot.com",

  messagingSenderId: "581557710123",

  appId: "1:581557710123:web:6945b2d64137f34767e96e",

  measurementId: "G-33Q3EK94Q6"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  const [theme, setTheme] = useState('light');

  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark'):setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div className="App">
        <MainContainer>
        <header>
          <h1>Heyy</h1>
          <SignOut />
          <button onClick={()=>themeToggler()} >{theme=== "light" ?'dark':'light'}</button>
          {console.log(theme)}
        </header>

        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
        </MainContainer>
      </div>
    </ThemeProvider>
  );
}

function SignIn(){

  const signInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <button onClick={signInWithGoogle} >Sign In with Google</button>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=""/>
      <p>{text}</p>
    </div>
  </>)
}


export default App;
