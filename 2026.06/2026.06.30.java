class Main {
    public static void main(String[] args) {
        String str = "ITISTESTSTRING";
        String[] result = str.split("T");
        System.out.print(result[3]);
    }
}

/* 
 - ['I', 'IS', 'ES', 'S', 'RING']
 정답: S
 */