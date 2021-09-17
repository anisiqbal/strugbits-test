var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function SumDiagonal(arr) {
    var sumPrimary = 0;
    var sumSecondary = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                sumPrimary = sumPrimary + arr[i][j];
            }
            if ((i+j) == arr.length-1) {
                sumSecondary = sumSecondary + arr[i][j]
            }
        }
    }
    
    console.log('Principal Diagonal =', sumPrimary);
    console.log('Secondary Diagonal =', sumSecondary);
}

function MultipleDiagonal(arr) {
    var sumPrimary = 1;
    var sumSecondary = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                sumPrimary = sumPrimary * arr[i][j];
            }
            if ((i+j) == arr.length-1) {
                sumSecondary = sumSecondary * arr[i][j]
            }
        }
    }
    
    console.log('Principal Diagonal =', sumPrimary);
    console.log('Secondary Diagonal =', sumSecondary);
}




SumDiagonal(arr);
MultipleDiagonal(arr);
