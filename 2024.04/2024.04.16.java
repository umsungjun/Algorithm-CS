public class Test {
    public static void main(String[] args){
        int x = 1;
        System.out.println(!(x > 0)); /* true */
        System.out.println((x != 0) || (x > 0)); /* true */
        System.out.println((x << 2)); /* true */
        System.out.println((x & 2)); /* 0 */
        System.out.println((x %=3)); /* 1 */
    }
}