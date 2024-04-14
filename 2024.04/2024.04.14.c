#include <stdio.h>
int func(int* a){
    printf("%d", *a); /* a[0] a[2] */
    printf("%d", a[2]) /* a[2] a[4] */
}

main(){
    int a[5] = {1, 2, 3, 4, 5}; /* a를 {1, 2, 3, 4, 5}로 초기화 함 */
    func(a);
    func(a + 2);
}

/* 정답: 1335 */