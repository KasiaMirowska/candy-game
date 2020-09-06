import GameActionTypes from './gameTypes';
import {switchingColors} from './utilities';


export const startGame = () => {
    return ({
        type: GameActionTypes.START_GAME,
    })
};

export const user = (user) => {
    return ({
        type: GameActionTypes.SIGNED_IN_USER,
        user,
    })
};

export const onDragStart = (selectedSquare) => {
    return ({
        type: GameActionTypes.ON_DRAG_START,
        selectedSquare,
    })
};


export const onDragEnd = (replacingSquare) => {
    return ({
        type: GameActionTypes.ON_DRAG_END,
        replacingSquare,
    })
};

export const updateBoard = (newState) => {
    console.log(newState)
    return ({
        type: GameActionTypes.UPDATE_BOARD,
        newState,
    })
}

export const onDragDrop = () => (dispatch, getState) => {
    const { selectedSquare, replacingSquare, board} = getState();

    let newBoard = switchingColors(selectedSquare, replacingSquare, board);

    console.log(newBoard, 'NEW BOARD?')
    dispatch(updateBoard({
        selectedSquare,
        replacingSquare,
        board: newBoard,
    }))

}
