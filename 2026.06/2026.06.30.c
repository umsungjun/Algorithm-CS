#include <stdio.h>
int main() {
    int sum = 0;
    for (int i = 1; i <= 3; i++) { // 1, 2, 3 실행
        sum += i;
    }
    printf("%d", sum);
    return 0;
}

/* 정답: 6 */