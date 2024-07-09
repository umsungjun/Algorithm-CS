public class Test {
    public static void main(String []args){
        int x = 1;
        System.out.println(!(x > 0)); // false
        System.out.println(x > 0 || x < 4); // true / true
        System.out.println(x << 2); // 128 64 32 16 8 4 2 1  => 4
        System.out.println(x & 2);  // 0
        System.out.println(x % 3);  // 1
    }
}

정답: false
     true
     4
     0
     1                


