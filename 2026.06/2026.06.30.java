class Parent {
    void show() {
        System.out.print("P");
    }
}

class Child extends Parent {
    @Override
    void show() {
        System.out.print("C");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.show();
    }
}

// 정답: C