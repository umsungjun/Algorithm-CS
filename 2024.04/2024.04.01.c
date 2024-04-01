#include <stdio.h>
#define NUM 4 // NUM을 상수 4로 정의
int prn(int n);

main(){
    prn(NUM);
}

int prn(int n){ // 초기에 4를 인자로 받음
    if(n > 1) prn(n-1); // 4는 1보다 크니까 prn함수 재귀
    printf("%d", n);
}

// 위의 동작 과정 4, 3, 2, 1일 때 1은 1보다 크지 않으니까 if문 true값에 해당되지않음
// 처음으로 1출력
// 이후 재귀되었던 함수들이 차례대로 출력
// 정답: 1234