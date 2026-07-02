#include <stdio.h>
int fn(int a) {
    if (a <= 1) return 1;
    return a * fn(a - 1); // 1*2*3*4*5 = 120
}
int main() {
    int a;
    scanf("%d", &a); // 5
    printf("%d", fn(a));
    return 0;
}