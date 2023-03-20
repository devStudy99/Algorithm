function solution(dots) {
    
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    let x = [x1, x2, x3, x4];
    let y = [y1, y2, y3, y4];
    
    x.sort((a,b)=>a-b);
    y.sort((a,b)=>a-b);
    
    return (x[0] - x[3]) * (y[0] - y[3]);
    
}