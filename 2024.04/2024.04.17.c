/* 재귀 함수를 이용해서 입력받은 수 부터 1까지 제곱들의 합을 구하는 문제 */
#include <stdio.h>
int recur(int n){
    if(n <= 1)
        return 1;
    else
        return n * n + recur();
}

main(){
    int i;
    scanf("%d", &i);
    printf("%d", recur(i))
}

/* 정답: n-1 */

