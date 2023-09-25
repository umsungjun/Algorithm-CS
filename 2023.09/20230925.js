/* Python언어 - lambda

def f(n):

    return lambda a : a * n

k = f(3)


print(k(10))

- 답안: 30 */

/* #include

int main() {

	int a[3][5] = {{29, 43, 51, 81, 32}, {11, 38, 97, 35, 5}, {24, 58, 72, 24, 30}};

	int sum, ssum = 0;

	for(int i=0; i<3; i++) {

		sum = 0;

		for(int j=0; j<5; j++) {

			sum += a[i][j];

		}

		ssum += sum;

	}

	printf("%d", ssum);

}

- 답안: 630 */

/* 통합, 모듈간상호작용

- 답안: ㉤ Integration */

/* #include

int main() {

	int i = 1;

	int n = 0;

	while(i <= 50) {

		if(i % 7 == 0)

			n += i;

		i++;

	}

	printf("%d", n);


}

- 답안: 196 */

/* 최단작업우선, 선점형의 경우 최단잔여시간우선

- 답안: SJF */
