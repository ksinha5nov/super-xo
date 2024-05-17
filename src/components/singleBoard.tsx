import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Board, BoxValue, Player } from "../types/types";
import { checkWinCondition } from "../core/utils";

const SingleBoard: React.FC<SingleBoardProps> = () => {

    const [turn, setTurn] = useState<Player>(1);
    const [board, setBoard] = useState<Board>(Array(9).fill(""))
    const [finish, setFinish] = useState<boolean>(false);
    const boardId = useRef(1);

    useEffect(() => {
        if (checkWinCondition(board)) {
            // props.setResult(turn);
            setTimeout(() => { alert(`${turn} won`) }, 1);
            setFinish(true);
        } else {
            setTurn(prev => prev === 1 ? 2 : 1);
        }
    }, [board]);

    function fillOnClick(e: SyntheticEvent) {
        if (finish) {
            return;
        }
        const position = parseInt(e.currentTarget.id[1]);
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
        <div>
            <div className=" mt-20 grid grid-cols-3 gap-1">
                {board.map((val, idx) => (
                    <div key={idx} id={`${boardId.current}${idx}`} className="h-20 w-20 text-2xl cursor-pointer bg-white text-black flex items-center justify-center transition-all" onClick={e => fillOnClick(e)}>{val}</div>
                ))}
            </div>
            <div className=" mt-10 font-banger text-5xl">Turn : {turn === 1 ? "X" : "O"}</div>
        </div>
    </>);
};

export default SingleBoard;

export interface SingleBoardProps {
    turn?: Player;
    setResult?: (turn: Player) => void;
}