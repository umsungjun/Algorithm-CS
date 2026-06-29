class Gamja {
    public static String fn(String str, int index, boolean[] seen) {
        if (index < 0) return "";
        char c = str.charAt(index); // index 위치의 문자를 가져옴
        String result = fn(str, index - 1, seen);
        if (!seen[c]) { // 해당 문자가 없을 때
            seen[c] = true;
            return c + result; // d + c + b + a
        }
        return result;
    }
    public static void main(String[] args) {
        String str = "abacabcd"; // 문자형 str 변수에 문자열 "abacabcd"를 저장
        int length = str.length(); // 8
        boolean[] seen = new boolean[256]; // seen 배열을 256 크기로 초기화하여 모든 문자가 처음에는 등장하지 않았음을 나타냄
        System.out.print(fn(str, length - 1, seen));
    }
} 