#include <stdio.h>
main(){
    int result = 1;
    for(int i = 1; i <= 5; i++)
        result *= i;
    print("%d", result);
}

// 정답 ; 120