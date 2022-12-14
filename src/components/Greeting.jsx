import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(randomMessage());

  const handleClick = () => {
    setGreeting(randomMessage())}

  return (
    <div> 
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleClick}>
        New Greeting
      </button>
    </div>
  );
}