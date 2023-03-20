function solution(polynomial) {
    
    let arr = polynomial.split(" ");
    
    let xCnt = [];
    let num_list = [];
    
    arr.map(v=>{
        if(v === "x"){
             xCnt.push("x");
         } else if(v.includes("x")){
            for(let i=0; i<v.replace(/x$/g, ''); i++){
                xCnt.push("x");
            }
         } else if(v !== "+"){
            num_list.push(v);
        }
    })
    
    let num = num_list.reduce((acc, cur) => acc + Number(cur), 0);
    
    let x = "";
    
    if(xCnt.length === 1){
        x = "x";
    } else {
        x = xCnt.length + "x";
    }
    
    return num === 0 ? x : xCnt.length === 0 ? ""+num : x + " + " +num;
    

}