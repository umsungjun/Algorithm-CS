def f(a):
    m = [[x] for x in a] # [[1], [2], [3], [4]]
    b = m[:] # b = [[1], [2], [3], [4]]
    for i in range(len(b) - 1): # 0~2까지 반복문 진행
        b[i+1] += b[i] # [[1], [2, 1], [3, 2, 1], [4, 3, 2, 1]] 배열 끼리의 합집합
    return sum(len(x) for x in m) # 정답: 10

print(f([1, 2, 3, 4]))

