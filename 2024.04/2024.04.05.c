#include <stdio.h>
main(){
    char str1[5] = "abcd"; // 5개의 문자배열을 가진 str1을 선언하고 "abcd"로 초기화
    char str2[5] // 5개의 문자배열로 str2 초기화

    for(int i=0; i<4; i++)
        str2[i] = str[3-i]; // str[2] = "dcba"
    str2[4] = '\0' // '\0'은 null 문자를 의미
    printf("%s", str2); 
}

/* 정답 : dcba */