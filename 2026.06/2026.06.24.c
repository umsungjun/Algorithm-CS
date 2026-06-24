#include <stdio.h>

struct fns {
    int* (*fn)(int*);
} mine;

int* dummy(int *d) {
    return d + 1; // d의 주소값에 1을 더한 값을 반환 = 32
}

int main() {
    struct fns mine; // 구조체 fns를 mine이라는 이름으로 선언

    int n[] = {16, 32}; // 0번째 인덱스에는 16, 1번째 인덱스에는 32를 저장

    mine.fn = dummy; // 구조체 fns의 멤버 fn에 dummy 함수를 할당

    printf("%x", *mine.fn(n)); // mine에 dummy를 호출

    return 0;
}

/**
 - %x : 16진수로 출력
 - 32를 16진수로 출력하면 20이므로, 결과값은 20이 된다. 
*/