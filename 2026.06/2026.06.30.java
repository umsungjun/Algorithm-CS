class Gamja {
    static private Gamja instance = null; // static으로 선언된 클래스는 JVM 내에서 단 하나만 존재
    private int count = 0; 
    static public Gamja get() {
        if (instance == null) { // instance가 null이면 Gamja 객체를 생성, 첫 instance 생성 이후 get() 호출 시 instance는 null이 아니므로 새로 생성하지 않고 기존 instance를 반환
            instance = new Gamja();
        }
        return instance;
    }
    public void count() { count++; }
    public int getCount() { return count; }
}
public class Gamja2 {
    public static void main(String[] args) {
        Gamja s1 = Gamja.get(); 
        s1.count(); // count = 1
        Gamja s2 = Gamja.get();
        s2.count(); // count = 2
        Gamja s3 = Gamja.get();
        s3.count(); // count = 3
        s1.count(); // count = 4
        System.out.print(s1.getCount());
    }
}

/* 정답: 4 */