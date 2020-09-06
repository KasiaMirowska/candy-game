export const switchingColors = (selectedSquare, replacingSquare, board) => {

    console.log(selectedSquare, 'before changes', replacingSquare);
    let selectedColor = selectedSquare.color;
    let selectedColorName = selectedSquare.colorName;
    let replacingColor = replacingSquare.color;
    let replacingColorName = replacingSquare.colorName;

    selectedSquare.color = replacingColor;
    selectedSquare.colorName= replacingColorName;
    replacingSquare.color = selectedColor;
    replacingSquare.colorName = selectedColorName;
   
    console.log(selectedSquare, replacingSquare, "?????? afrter switch, is this old board???? :", board);
    
    let newBoard = board.map(row => {
        return row.map(el => {
            if (el.value === selectedSquare.value) {
                return selectedSquare
                //console.log(el, el.color, selectedColor)
               
                console.log(selectedSquare, 'inside map1', el)
            } else if(el.value === replacingSquare.value) {
                return replacingSquare;
                console.log(replacingSquare, 'inside map2', el)
                
            } else {
                return el;
            }
        })
    })
    console.log(newBoard, 'REALLY????')
    return newBoard;
}