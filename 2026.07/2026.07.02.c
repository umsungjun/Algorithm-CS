#include <stdio.h>
#include <stdlib.h>

struct Item {
    int code;
    char tag;
};

int main() {
    struct Item *p = (struct Item *)malloc(sizeof(struct Item)); // 동적 메모리 할당
    p->code = 7;
    p->tag = 'B';
    printf("%c%d", p->tag, p->code); // 정답: B7
    free(p); // 동적 메모리 해제
    return 0;
}