interface A {
    int sum(int[] a, boolean odd);
}
class B implements A {
    public int sum(int[] a, boolean odd) {
        int result = 0;
        for (int i = 0; i < a.length; i++) {
            if ((odd && a[i] % 2 != 0) || (!odd && a[i] % 2 == 0))
                result += a[i];
        }
        return result;
    }
}

class Gamja {
    public static void main(String[] args) {
        int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        B x = new B();
        System.out.print(x.sum(a, true) + ", " + x.sum(a, false));
    }
}

/* 
 - (x.sum(a, true): a 배열에서 홀수의 합
 - (x.sum(a, false): a 배열에서 짝수의 합

 정답: 25, 20
 */