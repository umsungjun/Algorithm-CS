#include<stdio.h>
main(){
    int a, b=10; // a는 선언 b = 10으로 초기화
    for(a = 0; a < 5; ++a, b -= a);
    printf("%d, %d", a, b);
}

풀이 과정:
    a   /   b
0   1       9
1   2       7
2   3       4
3   4       0
4   5       -5

정답: 5 -5