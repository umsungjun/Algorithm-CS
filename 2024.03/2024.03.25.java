public class Test{
    static int n; // 따로 초기화 하지 않으면 초기 값은 0
    static int func(int t){
        n = n + t; // n+=t 와 동일 
        return n;
    }

    public static void main(String[] args){
        for(int i=0; i<5; i++){
            func(i); // 0 1 2 3 4
            System.out.print(n);
        }
    }
}
// 정답 : 10

class Berry{
    String str;
    void frt(){
        str = "Berry"; // str변수 초기화
        func(); // 오버라이딩에 의해 같은 이름일 때 자식의 메서드를 실행 // 3 호출
    }
    void func(){
        System.out.println(str); // Berry 출력
    }
}
class Apple extends Berry{
    String str;
    void func(){ // 2. 실행 
        str = "Apple"; // str 변수 초기화
        super.func(); // 부모의 func를 실행
        System.out.prinln(str); // Apple 출력
    }
}
public class Test{
    public static void main(String[] args){
        Berry A = new Apple();
        A.frt() // 1. 호출
    }
}

// 정답 : Berry
     //  Apple