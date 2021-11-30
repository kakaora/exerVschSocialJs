// nested loops and multi-dimensional objects
// nested loops to access all the elements inside multi-dimensional arrays or objects

let testT = [[1, 2, 3, 4, 5, 6, 7],
           [8, 10, 5, 7, 3, 22, 6, 42],
           [123, 54, 12, 11, 9, 15]];

let badNaseeb = {characters:[
                {name:'Gus', voice:'Teer Talbot'},
                {name:'Badh', voice:'Such Awl', prop:12},
                {name:'Go Gus Teer', voice:'Jis Chor'},
                {name:'Fund', voice:'G.T. Moz'}
            ]};

let chars = badNaseeb['characters'];  //badNaseeb.characters
for(let i=0, len=chars.length; i<len; i++){
    console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]['voice']);
    for(let prop in chars[i]){
        console.log(prop, chars[i].prop, chars[i][prop]);
    }
}

//nested for loops
let rows = testT.length;
for(let i=0; i<rows; i++){
    let items = testT[i].length;
    console.log(i, items)
    for(let n=0; n<items; n++){
        console.log( testT[i][n] );
    }
}