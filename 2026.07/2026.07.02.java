public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("정처기"); // StringBuilder 객체 생성 
        sb.append("감자"); // "정처기감자"
        sb.insert(3, "-"); // "정처기-감자"
        System.out.println(sb.toString()); // "정처기-감자" 출력
    }
}