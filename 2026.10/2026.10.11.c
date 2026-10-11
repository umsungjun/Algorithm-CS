#include <stdio.h>
typedef struct{
    int acc;
    double bal;
}Acc;

double fn(double b, int y){ // 1.1, 3 대입
    int i;
    double r=1.0;
    for(i=0;i<y;i++){ // 0, 1, 2 실행
        r=r*b; // 1.0 * 1.1 = 1.1, 1.1 * 1.1 = 1.21, 1.21 * 1.1 = 1.331
    }
    return r;
}

void init(Acc *a, int x, double y){
    a->acc=x;
    a->bal=y;
}

void A(Acc *a, double en){
    if (en>0 && en<a->bal) {
        a->bal=a->bal-en;
    }
    else {
        a->bal=a->bal+en;
    }
}

void B(Acc *a){
    a->bal=a->bal * fn((1+0.1), 3);
}

int main(){
    Acc ba;
    init(&ba, 9981, 2200.0); // 초기화 &ba.acc = 9981, &ba.bal = 2200.0
    A(&ba, 100.0); // &ba.acc = 9981, &ba.bal = 2100.0
    B(&ba); // &ba.acc = 9981, &ba.bal = 2100.0 * 1.331 = 2795.1
    printf("%d and %.2f", ba.acc, ba.bal); // 9981 and 2795.10 <- %.2f 는 소수점 셋째 자리에서 반올림(실제값 2795.100000000001)
    return 0;
}