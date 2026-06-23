class A {
    String f(Object x) {
        return "1";
    }

    String g() { // 1. g() 메서드에서 f("a") 호출
        return f("a");  
    }
}

class B extends A {
    String f(Object x) { // 2. 오버라이딩된 f(Object x) 메서드 호출
        return "2";
    }

    String f(String x) { // A 클래스의 f(Object x) 메서드를 오버로딩한 f(String x) 메서드 사용하지 않음
        return "3";
    }
}

public class Test {
    public static void main(String[] args) {
        A a = new B(); // B의 객체를 A 타입으로 참조

        System.out.println(a.g());
    }
}