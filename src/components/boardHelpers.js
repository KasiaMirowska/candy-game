
 const candyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
];


export const freshBoard = () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        let randomColor = Math.floor(Math.random() * candyColors.length);
        arr.push({value:i, color: randomColor});
    }

    let rowsArr = [];
    let chunk = 8;

    for (let i = 0; i < arr.length; i += chunk) {
        let temp = arr.slice(i, i + chunk);
        rowsArr.push(temp);
    };
    //console.log(rowsArr, 'ROWSARR', 'arr: ', arr)
    return rowsArr;
}

