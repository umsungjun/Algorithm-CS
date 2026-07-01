class Box {
    private int value = 3;

    public int getValue() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        Box b = new Box();
        System.out.print(b.getValue());
    }
}

/* 
 - value: Box 클래스의 private 멤버 변수로, 외부에서 직접 접근할 수 없음
 - getValue(): Box 클래스의 public 메서드로, value 값을 반환함
 - 정답: 3
 */