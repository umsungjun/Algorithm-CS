#include <stdio.h>
int main() {
    char *s = "GAMJA";
    printf("%c", *(s + 2));
    return 0;
}

/* 
 - *(s + 2) = s[2] = 'M'
 - 정답: M 
*/