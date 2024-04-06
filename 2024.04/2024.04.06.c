#include <stdio.h>
main(){
    int result = 1; // result 1로 초기화
    for(int i = 1; i<=5; i++){ // 1부터 5까지 반복
        result *= i; // 1, 2, 6, 24, 120
        printf("%d", result);
    }
}

/* 정답: 120 */