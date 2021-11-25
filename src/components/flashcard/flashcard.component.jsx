import React, { useEffect, useState } from "react";
import "./flashcard.style.scss";
import { randoMatic } from "../utils";


export default function Flashcard(randoMatic) {
  const [ex, setEx] = useState(null);
  const [why, setWhy] = useState(null);
  const [stringy, setStringy ] = useState(null);

  useEffect(() => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    return setEx(x) * setWhy(y);
  }, []);

  useEffect(() => {
    const congratStrings = ["Nice Job!  Try Again?", "That was too easy...", "Give it another go!", "Keep em comming!", "Atta Boy!"];
  let item = congratStrings[Math.floor(Math.random()*congratStrings.length)];
  return setStringy(item)
  }, [])

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1 className='question-title'>QUESTION</h1>
          <h2 className='question-problem'>
            {ex} X {why} = ?
          </h2>
        </div>
        <div className="flip-card-back">
          <h1 className='answer-title'>ANSWER</h1>
          <h2 className='answer-answer'>{ex * why}</h2>

          <p className='end-string'>{stringy}</p>
        </div>
      </div>
    </div>
  );
}
