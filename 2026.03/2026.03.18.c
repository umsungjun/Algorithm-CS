#include <stdio.h>

struct node { // 노드 구조체 정의
    int data;
    struct node* next;
};

int main() {
    struct node *head = NULL; // 연결 리스트의 헤드 포인터 초기화
    struct node a = {10, 0}; // 노드 a 생성 data = 10, next = 0 으로 초기화
    struct node b = {20, 0}; // 노드 b 생성 data = 20, next = 0 으로 초기화
    struct node c = {30, 0}; // 노드 c 생성 data = 30, next = 0 으로 초기화

    head = &a; // head가 노드 a를 가리키도록 설정
    a.next = &b; // 노드 a의 next가 노드 b를 가리키도록 설정
    b.next = &c; // 노드 b의 next가 노드 c를 가리키도록 설정

    printf("%d", head -> next -> data);

    // head에 next가 존재하므로 head -> next -> data는 노드 b의 data인 20을 출력
}