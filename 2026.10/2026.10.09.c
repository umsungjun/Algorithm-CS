#include <stdio.h>

int main() {
    int n = -3;
    if (n > 0) {
        printf("P");
    } else if (n == 0) {
        printf("Z");
    } else {
        printf("N");
    }
    return 0;
}

// 정답: N