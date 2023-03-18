function solution(numbers) {
    const eng = {
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

    const regex = [
        /zero/g,
        /one/g,
        /two/g,
        /three/g,
        /four/g,
        /five/g,
        /six/g,
        /seven/g,
        /eight/g,
        /nine/g,
    ];
    
    regex.map(reg=>{
        numbers = numbers.replace(reg, eng[(""+reg).split('/')[1]]);
    })
    
    return Number(numbers);
}
    

