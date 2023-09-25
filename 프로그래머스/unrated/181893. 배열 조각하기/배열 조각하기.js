function solution(arr, query) {
    query.forEach((element,idx)=>{
        arr = idx % 2 === 0 ? arr.slice(0,element+1) : arr.slice(element)
    })
    return arr
}