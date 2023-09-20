/* 개발환경 구축 종류 : (), 클라우드, 하이브리드

- 답안: 온프레미스(On-premise) */

/* () 테스트 : 모듈 테스트, 구현 단계, 블랙박스/화이트박스, 스텁, 드라이브

- 답안: 단위(Unit) */

/* class Gisafirst {

	public static void main(String[] args) {

		int i = 17;

		i += 1;

		i -= 2;

		i *= 3;

		i /= 4;

		i %= 5;

		System.out.println(i);

	}


} 

- 답안: 2 */

/* () 테스트 : 인수 테스트 종류 중 개발자 환경에서 테스트

- 답안: 알파(Alpha) */

/* ① FTP, 전송 제어 프로토콜

② TFTP, 비연결성, 고속

- 답안: ① TCP ② UDP */

/* #include

int main(void) {

	int score[6];

	int max = 0, min = 12;

	float sum = 0;

	

	for(int i = 0; i<6; i++) {

		score[i] = i*i;

		sum += score[i];

	}

	

	for(int i = 0; i<6; i++) {

		if(max < score[i])

			max = score[i];

		if(min > score[i])

			min = score[i];

	}

	

	printf("%.2f", (sum-max-min)/4.0);

- 답안: 7.50
} */
