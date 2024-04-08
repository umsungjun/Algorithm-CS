#include <stdio.h>
main(){
    int sum = 0;
    int i = 0;
    for(i = 0; i<=10; i++){
        if(i % 2 !=0)
            continue;
        sum += i; 
    }
    printf(sum + i); /* 0~10까지 짝수의 합 + 11 */
}

/* 정답: 41 */