public class Main {
    static String pick(int n) { // 1. pick(int n) 메서드 실행
        return "I" + n; // 2. "I" + n = "I3" 반환
    }

    static String pick(String s) { // 3. pick(String s) 메서드 실행
        return "S" + s.length(); // 4. "S" + s.length() = "S2" 반환
    }

    public static void main(String[] args) {
        System.out.print(pick(3) + pick("ab"));
    }
}

/* 정답: I3S2 */