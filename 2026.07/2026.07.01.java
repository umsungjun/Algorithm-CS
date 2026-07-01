
class Static {
    public int a = 20;
    static int b = 0;
}
public class Gamja {
    public static void main(String[] args) {
        int a;
        a = 10;
        Static.b = a; // Static.b = 10으로 초기화
        Static st = new Static(); // Static 타입에 st라는 객체 생성
        System.out.println(Static.b++); // Static.b = 10 출력 후 11로 증가
        System.out.println(st.b); // Static.b = 11 출력
        System.out.println(a); // a = 10 출력
        System.out.print(st.a); // st.a = 20 출력
    }
}