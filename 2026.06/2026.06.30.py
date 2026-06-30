def fn(str, k):
    s = str.split('T')
    return s[k]

str = "ITISTESTSTRING"
k = 3
result = fn(str, k)
print(result)

# 자바 문제와 동일 답: S