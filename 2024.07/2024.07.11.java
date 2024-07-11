public class Test{
    public static void main(String[] args){
        int w = 3, x = 4, y  = 3, z = 5;
        if((w == 2 | w == y) & !(y > z) & (1 == x ^ y != z)){ // true / true / true -> true
            w = x + y; // w = 7
            if(7 == x ^ y != w) // false / true -> true
                System.out.println(w);
            else
                System.out.println(x);
            
        }else{
            x = y + z;
            if(7 == y ^ z != w)
                System.out.println(w);
            else
                System.out.println(z);
        }
    }
}

주의할 점: ^ -> xor 연산자 둘 중 하나만 true여도 true
정답: 7
