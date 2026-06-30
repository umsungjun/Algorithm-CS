#include <stdio.h>
int Gamja(int base, int exp){
    int i, result = 1;
    for(i = 0; i < exp; i++) // 0~9 까지 실행
        result *= base;
    return result;
}
int main() {
    printf("%d", Gamja(2, 10));
    return 0;
}

/* 정답: 1024 */