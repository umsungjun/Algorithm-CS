#include <stdio.h>
void func(char * str){
    int i = 1, cnt = 0; /* cnt = 1, 2, 3, 4, 5 / i = 4, 7, 10, 6, 9, 5, 8*/
    while(cnt++ < 5){
        if(i > 7) i = i - 4;
        printf("%c", *(str + i)); /* BEHGF */
        i = i + 3;
    }

    main(){
        char str[] = "ABCDEFGH"
        func(str);
    }
}
/* 정답: BEHGF */