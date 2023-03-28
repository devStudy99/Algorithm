function solution(nums) {
    
    let numlist = [];
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                numlist.push(nums[i]+nums[j]+nums[k]);
            }    
        }
    }
    
    let answer = 0;
    let cnt = 0;

    for(let i=0; i<numlist.length; i++){
        for(let j=2; j<=Math.sqrt(numlist[i]); j++){
            if(numlist[i]%j===0){
                cnt++;
                break;
            }
        }
        if(cnt===0)answer++;
        cnt = 0;
    }
    
    return answer;
    
}