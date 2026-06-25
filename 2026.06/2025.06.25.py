def f(a): # 함수 정의 def
    m = [[x] for x in a] # [[1], [2], [3], [4]] 형태로 변환
    b = m[:] # b = m[:] # b는 m의 복사본, 즉 [[1], [2], [3], [4]] 형태 (얕은 복사)

    for i in range(len(b)-1): # 0부터 2까지 반복
        b[i+1] += b[i] 
        # [1], [2, 1], [3, 2, 1], [4, 3, 2, 1] 형태로 변환
    result = sum([len(x) for x in m]) # m 배열의 각 요소의 길이를 합산, 1 + 2 + 3 + 4
    return result # 10

print(f([1,2,3,4]))

# ----

s = input("입력 : ")  # 입력: HumanDev

x = [] 

for i in s.split():
    x.append(i[::-1]) # 역순으로 HumanDev -> veDnamuH x 배열에 추가

y = ''.join(x) # y = 'veDnamuH'

z = ''.join([c for c in y if c not in 'ong']) # ['v', 'e', 'D', 'a', 'm', 'u', 'H'] -> veDamuH

print(z) # veDamuH