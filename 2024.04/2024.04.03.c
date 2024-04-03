#include <stido.h>
main(){
    int ary[] = {15, 12, 26, 23, 31, 36}; // ary 객체 초기화
    int temp = 0; // temp 0으로 초기화
    int cnt = sizeof(ary) / sizeof(int); // sizeof는 ()요소의 size를 알려주는 함수 ary의 size는 24 => 24인 이유는 4byte * 6, 정수 자료형의 크기는 4 그래서 24/4 = 6으로 초기화
    for(int i = 0; i < cnt - 1; i++){
        for(int j = 0; j < cnt - 1 - i; j++){
            if(ary[j] > ary[j + 1]){ // 2중 for문을 돌면서 만약 객체의 앞 요소가, 바로뒤의 있는 요소보다 크면 뒤로 보내는 if문
                temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }
    // 2중 for문을 통과한 이후의 ary[] => {12, 15, 23, 26, 31, 36}
    for(int i = 1; i < cnt - 1; i++){ // *주의 1부터 6-1 = 5보다 작을 때 까지이기 때문에 1, 2, 3, 4만 출력
        printf("%d", ary[i]);
    }
}

// 정답: 15 23 26 31