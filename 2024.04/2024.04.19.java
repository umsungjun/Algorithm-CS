class Gisafirst {
	public static void main(String[] args) {
		int a[] = new int[8]; 
		int i = 0;
		int n = 11;

		while(n > 0) {
			a[i++] = n % 2; /* 1 1 0 1 0 0 0 0 */
			n /= 2;
		}
		for(i=7; i >= 0; i--) {
			System.out.printf("%d", a[i]);
		}
	}
}

/* 정답: 00001011 */