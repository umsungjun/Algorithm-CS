#include <stdio.h>
void swap(int a, int b) {
    int t=a; // t = 11;
    a=b; // a = 19;
    b=t; // b = 11;
}
int main() {
    int a=11;
    int b=19;
    swap(a, b); // swap 함수 호출 후에도 main 함수 내의 a, b 값은 변하지 않음
    switch(a) {
        case 19:
            b+=1; 
        case 11:
            b+=2; // b = 19 + 2 = 21 switch문에서 break가 없으므로 case 11이후 모든 case문이 실행됨
        default:
            b+=3; // b = 21 + 3 = 24
    }
    printf("%d", a-b); // 정답: 13
    return 0;
}