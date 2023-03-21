function solution(arr1, arr2) {

    let cnt1 = 0;
    let cnt2 = 0;
    let temp = [...arr1];
    
    while(cnt1<arr1.length){
        while(cnt2<arr1[0].length){
            temp[cnt1][cnt2] += arr2[cnt1][cnt2];
            cnt2++;
        }
        cnt1++;
        cnt2 = 0;
    }
    
    return temp;
    
}

