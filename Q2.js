var arr1 = [
    [2,4,4,4],
    [3,2,2,2],
    [1,5,9,1],
    [5,5,5,5],
];

var arr2 = [
    [2,4,4,4],
    [3,2,2,2],
    [1,5,9,1],
    [5,5,5,5],
];

function Multiple(arr1, arr2) {
    var arr3 = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            arr3[i][j] = arr1[i][j] * arr2[i][j];
        }
    }
    console.log('multiple =', arr3);
}
    
Multiple (arr1 , arr2);