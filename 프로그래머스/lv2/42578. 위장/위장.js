function solution(clothes) {
    let answer = 1;

    // 종류별로 의상 개수 카운팅
    const clothesObj = clothes.reduce((prev, curr) => {
        prev[curr[1]] = (prev[curr[1]] || 1) + 1;
        return prev;
    }, {});

    // 각 종류의 의상 개수를 곱해준다
    for (let key in clothesObj) {
        answer *= clothesObj[key];
    }

    // 아무것도 착용하지 않는 경우는 없으므로, -1을 해준다
    return answer - 1;
};