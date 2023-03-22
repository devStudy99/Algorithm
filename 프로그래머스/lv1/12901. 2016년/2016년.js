function solution(a, b) {
    
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    let day = b;
    
    for(let i=0; i<a-1; i++){
        day += month[i];    
    }

    return day%7 !== 0 ? date[day%7-1] : date[6];

}