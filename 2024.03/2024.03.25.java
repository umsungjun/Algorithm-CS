public class Test{
    static int n; // 따로 초기화 하지 않으면 초기 값은 0
    static int func(int t){
        n = n + t; // n+=t 와 동일 
        return n;
    }

    public static void main(String[] args){
        for(int i=0; i<5; i++){
            func(i); // 0 1 2 3 4
            System.out.print(n);
        }
    }
}
// 정답 : 10