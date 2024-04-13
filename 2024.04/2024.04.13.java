public class Test {
    static void arr(int[] a){
        int sw, temp, n = a.length;
        for(int i = 0; i < n - 1; i++){
            sw = i;
            for(int j = i + 1; j < n; j++)
                if(a[j] < a[sw])
                    sw = j;
            temp = a[i];
            a[i] = a[sw];
            a[sw] = temp;
        }
    }
    public static void main(String[] args){
        int n = {4, 2, 7, 1};
        arr(n);
        for(int i:n)
            System.out.printf("%d", i);
    }
}

/* 정답: 1 2 4 7 */