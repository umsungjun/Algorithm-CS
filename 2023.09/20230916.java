class Main {

    public static void main(String[] args) {

        int a=0, ss=0;

        while(true){

            if(ss>100) break;

            ++a;

            ss+=a;

        }

        System.out.print(a+ss);

    }


} 