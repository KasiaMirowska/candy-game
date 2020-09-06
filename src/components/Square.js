import React from 'react';
import './Square.css';
import {connect} from 'react-redux';
import { onDragStart, onDragEnd, onDragDrop } from '../redux/gameActions';


export const colors = {
    0: {
        rgb: 'rgb(128,0,0)',
        name: 'red',
    },
    1: {
        rgb:'rgb(248, 248, 166)',
        name: 'yellow',
    },
    2: {
        rgb: 'rgb(255,140,0)',
        name: 'orange',
    },
    3: {
        rgb:'rgb(153,50,204',
        name: 'purple',
    },
    4: {
        rgb: 'rgb(26, 172, 26)',
        name: 'green',
    },
    5: {
        rgb: 'rgb(8, 8, 241)',
        name: 'blue',
    }
};

const Square = ({ board, value, placement, color, onSelection, onDragOverDispatch , onDragEndDispatch}) => {

    const styles = {
        backgroundColor: colors[`${color}`].rgb
    }

    const onDragStart = (e, id, color) => {
        let selectedSquare = {value: id, colorName: colors[`${color}`].name, color: color}
        return onSelection(selectedSquare);   
    }

    const onDragOver = (e, id, color) => {
        let replacingSquare = {value: id, colorName: colors[`${color}`].name, color: color};
        
        return onDragOverDispatch(replacingSquare);
       
    };

    const onDragEnd = (e) => {
        let selectedSquare = {value: e.value, color: e.color}
        //console.log(selectedSquare, 'EEEEEEEEEE',e)
        return onDragEndDispatch(selectedSquare, board);   
    }
   
    return (
        <button value={value}
            className='square'
            style={styles}
            color={color}
            draggable
            onDragStart={(e) => onDragStart(e, value, color)}
            onDragOver={(e) => onDragOver(e, value, color)}
            onDragEnd={(e) => onDragEnd(e.target)}
            > 
            {value}  
        </button>
    )

}
const mapDispatchToProps = (dispatch) => ({
    onSelection: (selectedSquare) => dispatch(onDragStart(selectedSquare)),
    onDragOverDispatch: (replacingSquare) => dispatch(onDragEnd(replacingSquare)),
    onDragEndDispatch: () => dispatch(onDragDrop()),
}); 

const mapStateToProps = state => ({
    board: state.board,
})

export default connect(mapStateToProps, mapDispatchToProps)(Square);