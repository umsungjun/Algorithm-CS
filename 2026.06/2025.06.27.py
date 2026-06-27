t = [1, 2, 3, 4, 5]

print({i: i ** 2 for i in t if i % 2 == 1})


""" 
for i in t: // 1, 2, 3, 4, 5 순회
    if i % 2 == 1: // 홀수일 경우만 if문 통과
        print(f"{i}: {i ** 2}") 

        답: {1: 1, 3: 9, 5: 25}
"""

"""---"""

lst = 'Hi Soojebi'
print(lst[:-5:-1])

""" 
    역방향 정렬하면 ibejooS iH 순으로 정렬 됨
    -1에서 시작해서 -5까지 슬라이싱하면 ibej만 출력됨

    답: ibej
"""

