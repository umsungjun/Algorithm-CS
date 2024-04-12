public class Test {
    public static void main(String[] args){
        int a[] = new int[8]; /* [0, 0, 0, 0, 0, 0, 0 ,0] 초기화 */
        int d = 11, n = 0;
        do{
            a[n++] = d % 2; /* [1, 1, 0, 1, 0, 0, 0, 0] */
            d /= 2;
        }while(d > 0);
        for(n = 7; n >= 0; n--) 
            System.out.printf("%d", a[n]); /* 역순 출력 주의 */
    }  
}

/* 정답: 00001011 */