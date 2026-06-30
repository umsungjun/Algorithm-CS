#include <stdio.h>
typedef struct Node {
    int data;
    struct Node *next;
} Node;

int main() {
    Node n2 = {2, NULL};
    Node n1 = {1, &n2};
    Node *p = &n1;
    printf("%d", p->next->data); // n1의 next가 가리키는 n2의 data를 출력 정답: 2
    return 0;
}