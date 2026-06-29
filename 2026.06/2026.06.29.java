public class Gamja {
    public static void main(String[] args) {
        Parent c = new Child();
        c.paint();
        c.draw(); // 8. D출력
    }
}
class Parent {
    public void paint() {
        System.out.print("A");
        draw();
    }
    public void draw() {
        System.out.print("B"); // 2. B출력
        draw(); // 3. 재귀 호출
    }
}
class Child extends Parent {
    public void paint() {
        super.draw(); // 1. super.draw() 호출
        System.out.print("C"); // 5. C출력
        this.draw(); // 6. this.draw() 호출
    }
    public void draw() {
        System.out.print("D"); // 4. D출력 7. D출력
    }
}

// 정답: BDCDD  