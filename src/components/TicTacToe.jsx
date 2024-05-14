import { useEffect, useState } from "react";
import Background from "./Background";
import Winner from "./Winner";
import WinnerState from "./WinnerState";
import Reset from "./Reset";

const PLAYER_ONE = "X";
const PLAYER_TWO = "O";

const combinations = [
  { combo: [0, 1, 2], lineValue: "line-row-1" },
  { combo: [3, 4, 5], lineValue: "line-row-2" },
  { combo: [6, 7, 8], lineValue: "line-row-3" },
  { combo: [0, 3, 6], lineValue: "line-col-1" },
  { combo: [1, 4, 7], lineValue: "line-col-2" },
  { combo: [2, 5, 8], lineValue: "line-col-3" },
  { combo: [0, 4, 8], lineValue: "line-diag-1" },
  { combo: [2, 4, 6], lineValue: "line-diag-2" },
];

export default function TicTacToe() {
  const [tileValue, setTileValue] = useState(Array(9).fill(null));
  const [playerValue, setPlayerValue] = useState(PLAYER_ONE);
  const [lineValue, setLineValue] = useState();
  const [winnerState, setWinnerState] = useState(WinnerState.inProgress);

  function checkWinner(tileValue, setLineValue, setWinnerState) {
    for (const { combo, lineValue } of combinations) {
      const val1 = tileValue[combo[0]];
      const val2 = tileValue[combo[1]];
      const val3 = tileValue[combo[2]];
  
      if (val1 !== null && val1 === val2 && val1 === val3) {
        setLineValue(lineValue);
        if (val1 === PLAYER_ONE) {
          setWinnerState(WinnerState.playerOneWins);
        } else {
          setWinnerState(WinnerState.playerTwoWins);
        }
        return;
      }
    }
  
    const checkDraw = tileValue.every((tile) => tile !== null);
    if (checkDraw) {
      setWinnerState(WinnerState.noResult);
    }
  }
  

  const handleClick = (index) => {
    if (winnerState !== WinnerState.inProgress) {
      return;
    }

    if (tileValue[index] !== null) {
      return;
    }

    const tempTiles = [...tileValue];
    tempTiles[index] = playerValue;
    setTileValue(tempTiles);

    if (playerValue === PLAYER_ONE) {
      setPlayerValue(PLAYER_TWO);
    } else {
      setPlayerValue(PLAYER_ONE);
    }
  };

  const handleReset = () => {
    setWinnerState(WinnerState.inProgress);
    setTileValue(Array(9).fill(null));
    setPlayerValue(PLAYER_ONE);
    setLineValue(null);
  };

  useEffect(() => {
    checkWinner(tileValue, setLineValue, setWinnerState);
  }, [tileValue]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Background
        initValue={tileValue}
        onClick={handleClick}
        lineValue={lineValue}
      />
      <Winner winnerState={winnerState} />
      <Reset winnerState={winnerState} onReset={handleReset} />
    </div>
  );
}
