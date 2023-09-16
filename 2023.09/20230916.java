class Main {

    public static void main(String[] args) {

        int a=0, ss=0;

        while(true){

            if(ss>100) break;

            ++a; // 1 2 3 4 5 6 7 8 9 10 11 12 13 14

            ss+=a; // 1 3 6 10 15 21 28 36 45 55 66 78 91 105

        }

        System.out.print(a+ss); // a = 14 ss =105

    }


} 

/* 20. SQL - 학생들의 과목별 중간고사 점수 평균 구하기 - 괄호 채우기 (부분 점수 있음)

select cno as 과목번호, avg(midterm) as 중간평균

from 학생 group by 과목번호

having count(*) >= 5;

- 답안: avg, count */