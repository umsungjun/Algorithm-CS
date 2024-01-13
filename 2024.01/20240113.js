function solution(k, tangerine) {
    let answer = 0;
    let count = 0;
    const sortObj = {};
    
    tangerine.forEach((num)=>{
        sortObj[num] ? sortObj[num]+=1 : sortObj[num] = 1
    })
    const sortArr = Object.values(sortObj).sort((a,b)=>b-a);
    
    for(let i=0; i<sortArr.length; i++){
        answer+= sortArr[i]
        ++count
        if(answer >= k){
            break;
            
        }
    }
    return count;
}