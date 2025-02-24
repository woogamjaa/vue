export const geneatorNum=function* (title){
    let count=0;
    while(true){
        yield `${title}_${count++}`;
    }
}

export const items=[
    {id:"V",checked:true,label:"Vue"},
    {id:"J",checked:true,label:"Java"},
    {id:"S",checked:true,label:"SQL"},
    {id:"H",checked:true,label:"HTML/CSS"},
    {id:"JS",checked:true,label:"Javascript"},
    {id:"SP",checked:true,label:"SPRING"},
  ];
// export const member=[{

// }]