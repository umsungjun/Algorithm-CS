public class Soojebi {
    public static void main(String[] args){
        String a = "aaadef";

        // java에서 replace는 전체 문자열을 대상으로 치환
        a = a.replace("a", "c"); // "cccdef"
        a.replaceFirst("c", "d"); // "dccdef" (replaceFirst는 치환된 결과를 반환하지만, a에 저장하지 않음)

        System.out.print(a.substring(0, 2) + 2 + a.substring(3)); // cc2def
    }
} 