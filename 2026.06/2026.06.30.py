i = input("입력 = ") # HumanDev 입력
x = []
for w in i.split(): # w에 H u m a n D e v 가 들어감
    x.append(w[::-1]) # 뒤집은 문자열을 x에 추가 [v	e	D	n	a	m	u	H]
y = ' '.join(x) # y = v e D n a m u H
z = ''.join(c for c in y if c not in "ong") # y에서 문자를 하나씩 순회하면서 "o", "n", "g"가 아닌 문자만 c에 추가하여 z에 합침
print(z) # 정답: veDamuH

