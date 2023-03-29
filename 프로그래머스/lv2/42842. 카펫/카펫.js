function solution(brown, yellow) {

    for(let i=3; i<=brown/2; i++){
        
        let height = (brown+yellow)/i;
        let width = (brown+yellow)/height;
        
        if(width >= height){
            if((width-2)*(height-2)===yellow) return [width, height];
        }
        
    }
}