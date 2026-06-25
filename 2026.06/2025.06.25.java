class Calc {
    // cc는 세 가지 형태로 오버로딩

    int cc(int a, int b) {
        return a + b;
    }

    int cc(char a, char b) {
        return a - b;
    }

    int cc(char c) {
        return c;
    }
}

public class Test {
    public static void main(String[] args) {
        Calc calc = new Calc();

        int r1 = calc.cc(5, 4); // 9
        int r2 = calc.cc('c', 'a'); // 'c' - 'a' = 99 - 97 = 2
        char r3 = (char) calc.cc('3'); // '3' = 51, char로 변환하면 '3'

        System.out.println(r1 + r2 + "2" + r3); // 1123
    }
}

// a = '97'
// A = '65'
// '0' = '48'