class Counter {
    static int n = 0; // static 변수는 모든 인스턴스가 같은 변수를 공유합니다. 

    void add() {
        n++;
    }
}

public class Main {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();

        a.add();
        b.add();
        a.add();

        System.out.print(Counter.n); // 정답: 3
    }
}