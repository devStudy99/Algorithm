function solution(sizes) {
    
    const numCmp = (num1, num2) => [Math.max(num1, num2), Math.min(num1, num2)];
    
    let card = [];
    
    let width = 0;
    let length = 0;
    
    sizes.map(v=>{
        card.push(numCmp(v[0], v[1]));
    })
    
    card.map(v=>{
        if(width < v[0]) width = v[0];
        if(length < v[1]) length = v[1];
    })
    
    return width * length;

}