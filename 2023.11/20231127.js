function solution(brown, yellow) {
    const answer = [];
    const hap = brown + yellow;
    
    for(let h=3; h<=hap; h++){
        if(hap % h ===0){
            let w = hap / h; 
                             
            if((w-2) * (h-2) === yellow){
                return [w,h]
            }
            
        }
    }
    
    
    return answer;
}

// 카펫 나만의 풀이로 복습