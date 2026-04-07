class SuperObject{
    public void draw() {
        System.out.println("A");
        draw();
    }

    public void paint(){
        System.out.println("B");
        draw();
    }
}

class SubObject extends SuperObject{
    public void paint(){
        super.paint();
        System.out.println("C");
        draw();
    }

    public void draw() {
        System.out.println("D");
    }
}

public class Test {
    public static void main(String[] args) {
        SuperObject a = new SubObject(); // a 라는 SuperObject 타입의 참조변수에 SubObject 객체를 생성하여 할당
        a.paint(); // a의 paint() 메서드를 호출, SubObject의 paint()가 실행됨, 답: BDCD
        a.draw(); // a의 draw() 메서드를 호출, SubObject의 draw()가 실행됨, 답: D
    }
}

// 답: BDCDD