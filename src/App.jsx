import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenitcate";
import SignUpForm from './components/SignUpForm';
//const [token, setToken] = useState(null);
/*export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}*/
export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}