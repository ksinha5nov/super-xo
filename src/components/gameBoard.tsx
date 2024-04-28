import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Board, BoxValue, Player, Result } from "../types/types";

const GameBoard: React.FC<GameBoardProps> = ({ setResult, turn, onMove, disabled, id }) => {

    const [board, setBoard] = useState<Board>(Array(9).fill(""))
    const [finish, setFinish] = useState<boolean>(false);
    const boardId = useRef(id);
    const pos = useRef<number>();

    useEffect(() => {
        if (board && !board.every(val => val === "")) {
            if (checkWinCondition()) {
                setResult(turn === 1 ? 'X' : 'O');
                setFinish(true);
            } else if (board.every(val => val !== "")) {
                setResult("D");
                setFinish(true);
            }
            onMove(pos.current);
        }
    }, [board]);

    function fillOnClick(e: SyntheticEvent) {
        if (finish || disabled) {
            return;
        }
        const position = parseInt(e.currentTarget.id[1]);
        pos.current = position;
        let newVal: BoxValue = "";
        if (board[position]) {
            e.stopPropagation();
            return;
        } else {
            newVal = turn === 1 ? "X" : "O";
        }
        setBoard(prev => {
            const arr = [...prev];
            arr[position] = newVal;
            return arr;
        });
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
        if (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) return true;
        if (board[2] !== "" && board[2] === board[4] && board[4] === board[6]) return true;
        return false;
    }

    return (<>
        <div className="grid grid-cols-3 gap-1" style={!disabled ? { boxShadow: "#999999 0px 0px 20px 1px" } : {}}>
            {board.map((val, idx) => (
                <div key={idx} id={`${boardId.current}${idx}`}
                    className="h-16 w-16 text-2xl cursor-pointer bg-white text-black flex items-center justify-center transition-all"
                    style={disabled ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                    onClick={e => fillOnClick(e)}
                >
                    {val}
                </div>
            ))}
        </div>
    </>);
};

export default GameBoard;

export interface GameBoardProps {
    turn: Player;
    setResult: (turn: Result) => void;
    onMove: (turn: number | undefined) => void;
    disabled: boolean;
    id: number;
}
