#include <stdio.h>
int isPrime(int number) {
    int i;
    for (i = 2; i < number; i++) {
        if (number % i == 0) return 0;
    }
    return 1;
}
int main() {
    int number = 13195, max_div = 0, i;
    for (i = 2; i < number; i++) // 2부터 13194까지 실행
        if (isPrime(i) == 1 && number % i == 0)
            max_div = i; // i가 소수이면서 13195의 약수이면 max_div에 저장
    printf("%d", max_div); // 5, 7, 13, 29 중 가장 큰 소수 약수인 29 출력
    return 0;
}