function solution(s){
    const p = s.match(/p/gi);
    const y = s.match(/y/gi);

    return p === null && y === null ? true : p === null || y === null ? false : p.length === y.length ? true : false;
    
}