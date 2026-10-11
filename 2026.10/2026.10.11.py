locations = { # Dictionary형
    "NYC": "New York",
    "LON": "London",
    "PAR": "Paris",
    "TKY": "Tokyo",
}

result = ""
for key, location in locations.items():
    result += key[-1] + location[0] # CNNLRPTY
print(result)

--

a = "_THIS_IS_KIM_SPEAKING"
b = a[:4] # _THI
c = a[6:8] # IS
d = a[18:] # ING
e = b + c + d # _THIISING
print(e)


--

def f(a):
    m = [[x] for x in a] # m = [[1], [2], [3], [4]]
    b = m[:] # 얕은 복사라 b[i]는 m[i]와 같은 리스트 객체를 가리킴
    for i in range(len(b) - 1): # 0,1,2 반복
        b[i+1] += b[i] # 제자리 변형(+=)이라 같은 객체인 m[i+1]도 함께 바뀜
    return sum(len(x) for x in m) # m도 [[1],[2,1],[3,2,1],[4,3,2,1]]로 바뀌어서 합은 10

print(f([1, 2, 3, 4]))

""" 
 b = copy.deepcopy(m) <- 깊은 복사 하는 법
"""