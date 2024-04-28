import React, { useEffect, useState } from "react";
import { Player, Result } from "../types/types";
import GameBoard from "./gameBoard";

const SuperBoard: React.FC<SuperBoardProps> = () => {
  const [turn, setTurn] = useState<Player>(1);
  const [board, setBoard] = useState<Result[]>(Array(9).fill(""));
  const [finish, setFinish] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<(boolean | "")[]>(Array(9).fill(false));

  useEffect(() => {
    if (board && !board.every(val => val === "")) {
      const winner = checkWinCondition();
      if (winner) {
        setTimeout(() => {
          alert(`${winner} won`);
        }, 1);
        setFinish(true);
      } else if (board.every(val => val !== "")) {
        setTimeout(() => {
          alert(`Draw`);
        }, 1);
        setFinish(true);
      }
    }
  }, [board]);

  function setResult(boardPos: number, result: Result) {
    setDisabled(prev => {
      const arr = [...prev];
      arr[boardPos] = "";
      return arr;
    });
    setBoard((prev) => {
      const arr = [...prev];
      arr[boardPos] = result;
      return arr;
    });
  }

  function onMove(position: number | undefined) {
    if (typeof position === "undefined") return;
    setDisabled(prev => {
      let arr;
      if (prev[position] === "") {
        arr = prev.map((disabled) => disabled !== "" ? false : "");
      } else {
        arr = prev.map((disabled, idx) => disabled !== "" ? idx === position ? false : true : "");
      }
      return arr;
    });
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
        return currVal;
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
        return currVal;
      }
    }

    //diagonal check
    if ((board[0] !== "" && board[0] === board[4] && board[4] === board[8])
      || (board[2] !== "" && board[2] === board[4] && board[4] === board[6])) return board[4];
    return false;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {board.map(
          (val, idx) => val === "" ? (
            <GameBoard
              key={idx}
              id={idx}
              setResult={(result: Result) => setResult(idx, result)}
              turn={turn}
              onMove={onMove}
              disabled={finish || !!disabled[idx]}
            />
          ) : (
            <div className="h-48 w-48 m-1 text-2xl bg-white text-black flex items-center justify-center transition-all">{val}</div>
          )
        )}
      </div>
      <div className="m-28 text-5xl">Turn: {turn === 1 ? "X" : "O"}</div>
    </>
  );
};

export default SuperBoard;

export interface SuperBoardProps { }