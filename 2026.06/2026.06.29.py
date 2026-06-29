def func(x):
    for i in range(len(x) // 2): # 6 // 2 = 3
        x[i], x[-i-1] = x[-i-1], x[i]

x = [1, 2, 3, 4, 5, 6]
func(x)
print(sum(x[::2]) - sum(x[1::2]))