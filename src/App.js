import React from "react";
import './App.css';
import ProfileCard from "./components/ProfileCard";

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>React styling masterclass</h1>
        <p>Building Beautiful Components</p>
      </header>
      <main className="main-content">
        <ProfileCard/>
      </main>
    </div>
  )
}
export default App;