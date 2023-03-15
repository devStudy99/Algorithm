function solution(array) {
    array.sort((a,b) => a-b);

    let cnt = 0;
    let choi = -1; // 최빈값이 뭔지(등장할 수 없는 값으로 처음 설정)
    let choiRepeatCnt = 0; // 최빈값이 될 때 몇 번 반복해서 된건지
    let repeatCnt = 0; // 현재 똑같은 숫자가 몇 번 등장했는지
    let beforeNum = -1; // 지금 보고있는 이전 숫자
    let isDupChoi = false;
    // 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
    while(cnt < array.length){
        
        // 이전숫자와 현재숫자가 다르면 현재반복횟수를 1로 초기화하고 같으면 반복횟수 + 1
        if(beforeNum !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt++;
        }
        
        // 현재반복횟수가 최빈값반복횟수와 같아졌을 때 최빈값이 중복됐으면 true로 값 변경
        if(repeatCnt === choiRepeatCnt){
            // 같은 값일 때도 실행되니까 최빈값과 현재값이 다를 때 실행되도록
            if(choi !== array[cnt]){
                isDupChoi = true;    
            }
        }
        
        // 현재반복횟수가 최빈값반복횟수보다 크면 현재값을 최빈값에 저장 -> 현재반복횟수를 최빈값반복횟수에 저장
        if(repeatCnt > choiRepeatCnt){
            choi = array[cnt];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        
        // 다음 순서로 넘어가기 위해 현재숫자를 이전숫자에 저장하고 현재순서 + 1
        beforeNum = array[cnt];
        cnt++;
    }
    
    if(isDupChoi) return -1;
    return choi;
}