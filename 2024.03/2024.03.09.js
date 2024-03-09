function solution(s) {
    const answer = [];
    
    const filterS = s.replace('{{','').replace('}}','').split('},{');
    // replace('{{','') replace('}}','')를 통해서 문자를 ''으로 치환하였음
    // 위 과정을 거쳐야 split('},{')을 통해 	[ '2', '2,1', '2,1,3', '2,1,3,4' ] 이러한 결과 값을 얻을 수 있기 때문
    const sortFilterS = filterS.sort((a,b)=> {   
        if(a.length > b.length){
            return 1
        }else{
            return -1
        }
    });
    // filterS.sort를 통해서 a(뒤의 요소), b(앞의 요소) a가 b보다 길이가 짧으면 else 조건을 만족할 경우 위치 변경
    sortFilterS.forEach((strs)=>{
        strs.split(',').forEach((str)=>{
            const num = +str;
             if(!answer.includes(num)){
            answer.push(num);
            }
        })
    })
    // length로 정렬 된 데이터를 하나씩 순회하면서 split(',')한 문자 str을 number 값으로 변한 한 뒤 중복 되지 않게 answer에 담아줬습니다.
    
    return answer;
}