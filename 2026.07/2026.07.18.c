#include <stdio.h>
char Data[5]={'B', 'A', 'D', 'E'};
char c;
int main(){
    int i, temp, temp2;
    c = 'C';
    printf("%d\n", Data[3]-Data[1]); // 4 출력
    for(i=0;i<5; ++i){
        if(Data[i]>c)
            break;
    }
    // i=2
    temp=Data[i]; // temp=Data[2] = 'D'
    Data[i]=c; // {'B', 'A', 'C', 'E'}
    i++; // i=3
    for(; i<5; ++i){ // 3~4 실행
        temp2=Data[i]; // E
        Data[i]=temp;
        temp=temp2;
    }
    for(i=0; i<5; i++){
        printf("%c", Data[i]);
    }
    return 0;
}

/* 
 정답:
 4
 BACDE
*/