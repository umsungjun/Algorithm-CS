class Test{
    public static void main(String args[]){
        int a = 26;
        int b = 91;
        int g = 0;
        int c = a < b ? a : b; /* c = 26 */

        for(int i = 1; i < c; i++){
            if(a % i == 0 && b % i ==0)
                g = i;
        }
        System.out.print(g);
    }
}

/* 정답: 최대 공약수 13ㄴ */