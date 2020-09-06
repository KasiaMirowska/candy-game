import GameActionTypes from './gameTypes';
import { freshBoard } from '../components/boardHelpers';


const makeInitialState = () => ({
    board: freshBoard(),
    user: 'user',
    startOfGame: false,
    selectedSquare: {},
    replacingSquare: {}
});

const INITIAL_STATE = makeInitialState();

const GameReducer = (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case GameActionTypes.START_GAME:
            return ({
                ...state,
                board: freshBoard(),
                user: 'user',
                startOfGame: true
            });
        case GameActionTypes.ON_DRAG_START:
            return ({
                ...state,
                startOfGame: false,
                selectedSquare: action.selectedSquare
            });
        case GameActionTypes.ON_DRAG_END:
            return ({
                ...state,
                startOfGame: false,
                replacingSquare: action.replacingSquare
            });
        case GameActionTypes.UPDATE_BOARD:
            console.log(action)
            return ({
                user: state.user,
                startOfGame: false,
                ...action.newState,
            });
        default:
            return state;
    }
}

export default GameReducer;