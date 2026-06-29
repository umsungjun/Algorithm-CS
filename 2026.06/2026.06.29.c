#include <stdio.h>
char n[30];
char *gamja(){
    gets(n); // gets() 함수를 사용하여 문자열을 입력받아 n 배열에 저장
    return n;
}
int main() {
    char *p1=gamja(); // 배열 n의 주소를 p1에 저장
    char *p2=gamja(); // 배열 n의 주소를 p2에 저장
    char *p3=gamja(); // 배열 n의 주소를 p3에 저장
    printf("%s\n", p1); // 박영희
    printf("%s\n", p2); // 박영희
    printf("%s\n", p3); // 박영희
    return 0;
}
/* 
[입력]
홍길동
김철수
박영희 
*/