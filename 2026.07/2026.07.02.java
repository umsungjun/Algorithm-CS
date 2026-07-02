public class Gamja{
    public static void main(String[] args){
        System.out.print(Gamja.check(1));
    }
    _______ String check(int num){
        return (num>=0) ? "positive" : "negative";
    }
}

/* [출력값]
positive 

 - static을 넣으면 객체 없이도 check 메서드를 호출할 수 있음
*/