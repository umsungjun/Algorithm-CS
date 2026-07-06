public class Main {
    public static void main(String[] args) {
        int score = 92;
        System.out.printf("[%-5d]\n", score); // [92   ]
        System.out.printf("[%5d]\n", score);  // [   92]
        System.out.printf("[%.2f]", 3.5);     // [3.50]
    }
}