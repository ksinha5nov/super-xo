import { Result } from "../types/types";

export function checkWinCondition(board: Result[]) {
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