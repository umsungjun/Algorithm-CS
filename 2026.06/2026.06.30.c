#include <stdio.h>
int main() {
    int arr[3][3]={1, 2, 3, 4, 5, 6, 7, 8, 9};
    /* 
        1 2 3
        4 5 6
        7 8 9
    */
    int* parr[2]={arr[1], arr[2]}; // arr[1] = {4, 5, 6}, arr[2] = {7, 8, 9}
    printf("%d", parr[1][1]+*(parr[1]+2)+**parr); // parr[1][1] = 8, *(parr[1]+2) = 9, **parr = 4
    return 0;
}