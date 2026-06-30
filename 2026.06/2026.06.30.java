interface Person {
    void sayHello(); // 추상 메서드 -> 구현 클래스가 반드시 오버라이딩 되야 함

    default void sayBye() { // default 메서드는 구현 클래스에서 오버라이딩 하지 않아도 사용 가능
        System.out.println("안녕히 가세요");
    }
}

class Student implements Person {
    public void sayHello() {
        System.out.println("안녕하세요");
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Student();
        p.sayHello(); // '안녕하세요' 출력
        p.sayBye(); // '안녕히 가세요' 출력
    }
}