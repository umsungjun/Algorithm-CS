#include <stdio.h>
#define SIZE 3

typedef struct {
    int a[SIZE]; // 배열 3의 크기
    int front; // 0으로 초기화
    int rear; // 0으로 초기화
} Queue;

void enq(Queue* q, int val){
    q->a[q->rear] = val;
    q->rear = (q->rear + 1) % SIZE;
}

int deq(Queue* q) {
    int val = q->a[q->front];
    q->front = (q->front + 1) % SIZE;
    return val;
}

int main() {
    Queue q = {{0}, 0, 0};

    enq(&q,1); enq(&q,2); deq(&q); enq(&q, 3);

    int first = deq(&q);
    int second = deq(&q);
    printf("%d 그리고 %d", first, second);

    return 0;
}

// 정답: 2 그리고 3