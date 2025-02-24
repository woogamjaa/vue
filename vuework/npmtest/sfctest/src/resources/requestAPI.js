const serverdev='http://localhost:9090';
const server='http://14.36.141.71:9000';

export const loginRequuest=async (logindata)=>{
    const response= await fetch(`${serverdev}/auth/login.do`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(logindata)
    });
    const data= await response.json();
    console.log(data);
}


// 기존 사용방식
// export const loginRequuest=()=>{
//     fetch(`${serverdev}/login`)
//     .then((response)=>{
//         response.json()})
//         .then(data=>{});
// }