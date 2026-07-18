#include <stdio.h>

double arr1(int p[], int len) {
    double ar = 0;
    int i;
    for (i = 0; i < len; i++) {
        ar += (double)p[i];
    }
    return ar / len;
}

double arr2(int *p, int len) {
    double ar = 0;
    int i;
    for (i = 0; i < len; i++) {
        ar += (double)(*(p + i));
    }
    return ar / len;
}

int main() {
    int arr[10] = {95, 15, 80, 55, 25, 45, 70, 60, 50, 35};
    int len = 10;
    printf("%.2f", arr1(arr, len) + arr2(arr, len));
    return 0;
}