/* function solution(score) {
    const answer = [];
    
    const scoreList = score.map((num, i)=> num[0]+num[1]).sort((a,b)=> b-a)
    
    score.forEach((num)=>{
        answer.push(scoreList.indexOf(num[0] + num[1])+1)
    })
    return answer;
} */
