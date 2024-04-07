/* 100부터 1까지의 합을 구하는 알고리즘 */\

#include <stdio.h>
int SumNto1(int n){
    if(n <= 1){
        return 1;
    }else{
        return n + (/* 정답 */);
    }

    main(){
        int result = SumNTo1(100);
        printf("%d", result);
    }
}

/* 정답: SumNto1(n - 1) */