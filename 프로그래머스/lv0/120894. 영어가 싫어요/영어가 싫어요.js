function solution(numbers) {
    const obj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

//     const regex = [
//         /zero/g,
//         /one/g,
//         /two/g,
//         /three/g,
//         /four/g,
//         /five/g,
//         /six/g,
//         /seven/g,
//         /eight/g,
//         /nine/g,
//     ];
    
//     regex.map(reg=>{
//         numbers = numbers.replace(reg, obj[(""+reg).split('/')[1]]);
//     })
    
//     return Number(numbers);
    
    // num = 차례대로 정규식에 걸리는 값
    const answer = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (num) => {
        return obj[num];
    });
    
    return Number(answer);
}
    

