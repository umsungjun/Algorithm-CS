#include <stdio.h>
main(){
    int n, sum = 0;
    printf("정수를 입력하시오 : ");
    scanf("%d", &n); /* ex) 5입력 */
    for(int i = 1; i <=n; i++) /* 1, 2, 3, 4, 5 */
        sum = sum + i;
    printf("%d", sum);
}

/* 정답: 5를 입력했을 경우 15 */