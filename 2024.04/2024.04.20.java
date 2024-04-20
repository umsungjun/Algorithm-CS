class Main {
    public static void main(String[] args) {
        int x = 1, T_x=0, t_x=0;
        T_x = (x >= 0) ? x : -x; /* T_x = 1 */
        if(x >= 0)
            t_x = x; /* t_x = 1 */
        else
            t_x = -x;

        System.out.println(T_x+" "+t_x);
    }
}

/* 정답: 1 1 */