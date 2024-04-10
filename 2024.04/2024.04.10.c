#include <stdio.h>
main(){
    int num = 35, eventcnt = 0, oddcnt = 0;

    for(int i = 1; i <= num; i++){ /* 1~35 까지 반복 */
        if(i % 2 == 0)
            eventcnt++  /* 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34  갯수: 17*/
        else
            oddcnt++
    }

    printf("%d %d", eventcnt, oddcnt);
}

/* 정답: 17, 18 */