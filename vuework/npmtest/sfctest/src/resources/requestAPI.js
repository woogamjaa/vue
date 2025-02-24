const serverdev='http://localhost:9090';
const server='http://14.36.141.71:9000';

export const loginRequuest=async ()=>{
    const response= await fetch(`${serverdev}/login`);
    const data= await tresponse.json();
}