#include <stdio.h>
int increase(){
    static int x = 0;
    x+=2;
    return x;
}

int main() {
    int x = 0; // 4
    int sum=0; // 20
    int i = 0;
    for(i=0;i<4;i++){ // 0~3 까지 반복
        x++;
        sum+=increase(); // 2, 4, 6, 8
    }

    printf("%d", sum); // 정답: 20
    return 0;
}