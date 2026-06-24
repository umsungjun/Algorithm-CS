a = list(range(10)) // a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in a[::-2]:
    print(i, end='A') // 9A7A5A3A1A

print()

/** 
 - 만약 a[::-2]를 a[::2]로 바꾸면 0A2A4A6A8A가 된다.
 - 만약 a[::-2]를 a[1::2]로 바꾸면 1A3A5A7A9A가 된다.
*/