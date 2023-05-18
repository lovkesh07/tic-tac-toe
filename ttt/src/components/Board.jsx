import React, { useState } from "react";
import Square from "./Square";
import "../App.css";


const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  // created an array of size null with inital value null

  //   console.log(state);

  const handleclick = (index) => {
    // console.log(index);
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "0";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const winner = () => {
    const winlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8],
    ];
  
    for(let logic of winlogic ){
      const [a,b,c] =logic;
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
          return state[a];
      }
    } 
    return false;
  };
  const isWinner = winner();

  const handleRest = () => {
    setState(Array(9).fill(null));
    console.log("clicked");
  };

  return (
    <>
      <h1 className="heading">TIC-TAC-TOE GAME</h1>
        <div className="board-container">
            {isWinner ? (
            <>{isWinner} won the game
            <button onClick={handleRest}>Restart</button>
             </>
            ):(<>

          <div className="board-row">
            <Square onClick={() => handleclick(0)} value={state[0]} />
            <Square onClick={() => handleclick(1)} value={state[1]} />
            <Square onClick={() => handleclick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleclick(3)} value={state[3]} />
            <Square onClick={() => handleclick(4)} value={state[4]} />
            <Square onClick={() => handleclick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleclick(6)} value={state[6]} />
            <Square onClick={() => handleclick(7)} value={state[7]} />
            <Square onClick={() => handleclick(8)} value={state[8]} />
          </div>

          <button className="button" onClick={handleRest}>Restart</button>
        
            </>
        )}
      </div>
    </>
  );
};

export default Board;
