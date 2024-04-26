import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Board, BoxValue, Player, Result } from "../types/types";
import GameBoard from "./gameBoard";

const SuperBoard: React.FC<SuperBoardProps> = () => {
  const [turn, setTurn] = useState<Player>(1);
  const [board, setBoard] = useState<Result[]>(Array(9).fill(""));
  const [finish, setFinish] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean[]>(Array(9).fill(false));
  const boardId = useRef(1);

  useEffect(() => {
    if (checkWinCondition()) {
      // props.setResult(turn);
      setTimeout(() => {
        alert(`${turn} won`);
      }, 1);
      setFinish(true);
    } else {
      setTurn((prev) => (prev === 1 ? 2 : 1));
    }
  }, [board]);

  function setResult(position: number, result: Result) {
    if (finish) {
      return;
    }
    setBoard((prev) => {
      const arr = [...prev];
      arr[position] = result;
      return arr;
    });
  }

  function onMove() {
    setTurn(prev => prev === 1 ? 2 : 1);
  }

  function checkWinCondition() {
    console.log(board);

    //columns check
    for (let i = 0; i < 3; i++) {
      const currVal = board[i];
      let j = i;
      for (j; j < 9; j += 3) {
        if (currVal === "" || board[j] === "" || board[j] !== currVal) {
          break;
        }
      }
      if (j >= 9) {
        return true;
      }
    }

    //rows check
    for (let i = 0; i < 9; i += 3) {
      const currVal = board[i];
      let j = i;
      for (j; j < i + 3; j++) {
        if (currVal === "" || board[j] === "" || board[j] !== currVal) {
          break;
        }
      }
      if (j >= i + 3) {
        return true;
      }
    }

    //diagonal check
    if (
      board[0] !== "" &&
      board[4] !== "" &&
      board[8] !== "" &&
      board[0] === board[4] &&
      board[4] === board[8]
    )
      return true;
    if (
      board[2] !== "" &&
      board[4] !== "" &&
      board[6] !== "" &&
      board[2] === board[4] &&
      board[4] === board[6]
    )
      return true;
    return false;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {board.map(
          (val, idx) =>
            val === "" ? (
              <GameBoard
                setResult={(result: Result) => setResult(idx, result)}
                turn={turn}
                onMove={onMove}
                disabled = {disabled[idx]}
              />
            ) : (
              <div>{val}</div>
            )
          /*<GameBoard setResult={(result: Result) => setResult(idx, result)}></GameBoard>*/
        )}
      </div>
    </>
  );
};

export default SuperBoard;

export interface SuperBoardProps {
  turn?: Player;
  setResult?: (turn: Player) => void;
}
