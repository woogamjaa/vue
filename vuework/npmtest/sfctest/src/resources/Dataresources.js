export const geneatorNum=function* (title){
    let count=0;
    while(true){
        yield `${title}_${count++}`;
    }
}


// export const member=[{

// }]