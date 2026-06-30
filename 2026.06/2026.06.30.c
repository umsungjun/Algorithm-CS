#include <stdio.h>
struct Gamja {
    char name[10];
    int age;
};
int main() {
    struct Gamja s[] = {"Kim", 28, "Lee", 38, "Seo", 50, "Park", 35}; // 배열 s의 각 요소는 struct Gamja 타입의 구조체로 구성되어 있음
    struct Gamja *p; // 포인터 p를 선언하고, 구조체 배열 s의 첫 번째 요소를 가리키도록 함
    p = s; // 포인터 p가 구조체 배열 s의 첫 번째 요소를 가리키도록 함
    p++; // 포인터 p를 다음 구조체 요소로 이동시킴, 즉 s[1]을 가리키게 됨
    printf("%s\n", p->name); // Lee
    printf("%d\n", p->age); // 38
    return 0;
}