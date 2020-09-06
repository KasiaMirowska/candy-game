import React from 'react';
import './Board.css';
import Square from './Square';
import { connect } from 'react-redux';


const Board = ({ board, startOfgame }) => {
    //console.log(board, 'INSIDE BOARD')
    

    return (

        <div className='board-container'>
            {
                board.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className='row-container'>
                            {
                                row.map((square, columnIndex) => (
                                    <Square key={columnIndex} value={square.value} placement={{ rowIndex, columnIndex }} color={square.color} />
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>

    )
}
const mapStateToProps = state => {
    //console.log(state.board, 'state')
    return ({
        board: state.board,
        startOfgame: state.startOfgame,
    })
}

export default connect(mapStateToProps)(Board);