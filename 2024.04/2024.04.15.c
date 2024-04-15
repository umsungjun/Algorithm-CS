#include <stdio.h>
main(){
    int num = 55, quotient = 0;
    while(num >= 4){
        num = num - 4; /* 51 47 43 39 35 31 27 23 19 15 11 7 3 */
        quotient++     
    }
    printf("%d 그리고 ", quotient);
    printf("%d", num);
}
/* 정답: 13 그리고 3 */