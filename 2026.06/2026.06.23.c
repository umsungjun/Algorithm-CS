#include <stdio.h>

double arr(int *p, int len) { // 배열 arr, 10
    double av = .0; // 초기 값 0.0

    for(int i = 0; i < len - 1; i++) {
        av += (double)p[i]; // 문법적 sugar
    }

    return av / len; // 530.0 / 10 = 53.0
}

double arrv(int *p, int len) { // 배열 arr, 10
    double av = .0; // 초기 값 0.0

    for(int i = 0; i < len - 1; i++) {
        av += (double)(*(p + i)); // 포인터
    }

    return av / len; // 530.0 / 10 = 53.0
}

int main() {
    int arr[] = {70, 85, 90, 15, 45, 55, 65, 95, 10, 40}; // 길이 10
    int len = 10;

    printf("%.2f\n", arr(arr, len) + arrv(arr, len));

    return 0;
}

/**
 - %.2f : 소수점 둘째 자리까지 출력
 - arr과 arrv는 같은 기능을 수행하는 함수
*/