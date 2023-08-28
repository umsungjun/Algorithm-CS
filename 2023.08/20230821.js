function solution(my_string, m, c) {
    const answer = []
    let str =''
    let count =m-1
    let answerStr =''
    
    for(let i=0; i<my_string.length; i++){
        str+=my_string[i]
        if(i===count){
            answer.push(str)
            count+=m
            str=''
        }
    }
    
    answer.forEach((arr)=>{
        answerStr+=arr[c-1]
    })
    
    return answerStr
}