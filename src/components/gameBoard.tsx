import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Board, BoxValue, Player, Result } from "../types/types";
import { checkWinCondition } from "../core/utils";

const GameBoard: React.FC<GameBoardProps> = ({ setResult, turn, onMove, disabled, id }) => {

    const [board, setBoard] = useState<Board>(Array(9).fill(""))
    const [finish, setFinish] = useState<boolean>(false);
    const boardId = useRef(id);
    const pos = useRef<number>();

    useEffect(() => {
        if (board && !board.every(val => val === "")) {
            if (checkWinCondition(board)) {
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

    return (<>
        <div className="grid grid-cols-3 gap-1" style={!disabled ? { boxShadow: "#7CFC00 0px 0px 30px 0px" } : {}}>
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
