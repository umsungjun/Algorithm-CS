typedef struct N {
    int v;
    struct N* a;
    struct N* b;
} N;
int c = 0;
int result = 0;
void func(N *n){
    if(!n) return;
    func(n->a);
    func(n->b);
    if(++c == 3){
        result = n -> v; // 후위순회
    }
}

int main() {
    N ne = {35, 0 ,0};
    N nd = {64, 0, 0};
    N nc = {53, 0, 0};
    N nb = {12, &ne, &nc};
    N na = {21, &nb, &nd};
    func(&na);
    printf("%d\n", result);
    return 0;
}

  12
 | |
 35 53 64 