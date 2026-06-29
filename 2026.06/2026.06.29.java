class A {
    int a, b;
    public A(int a, int b) {
        this.a = a;
        this.b = b;
    }
}

class B extends A {
    int c = 3;
    public B(int i) {
        super(i, i + 1); // 부모 A의 생성자를 호출하여 a와 b 필드 초기화 a = 10, b = 11
    }
    public void print() {
        System.out.println(c * c); // 9
    }
}

public class Gamja {
    public static void main(String[] args) {
        B a = new B(10); // B타입의 객체를 생성하여 a에 할당
        a.print();
    }
}