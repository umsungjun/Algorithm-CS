public class Main {
    public static void main(String[] args) {
        Integer a = 100;
        Integer b = 100;
        Integer c = 200;
        Integer d = 200;
        System.out.println(a == b);
        System.out.println(c == d);
    }
}


/* 
 - Integer는 Int와 다른 객체로 감싼 래퍼 클래스
 - 값을 비교하려면 equals() 메서드를 사용해야 함
 - -128 ~ 127 범위의 Integer 객체를 JVM 내부에 미리 만들어 캐시
 - 그래서 a == b는 true, c == d는 false

 - 정답: true
        false
 */