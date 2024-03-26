asia = {'한국', '중국', '일본'}
asia.add('베트남')
asia.add('중국')
asia.remove('일본')
asia.update({'한국', '홍콩', '태국'})
print(asia)

정답 : {'한국', '중국', '베트남', '홍콩', '태국'}
파이썬에서 {}세트자료형은 중복 요소가 추가되지 않는다.


class CharClass:
    a = ['Seoul', 'Kyeongi', 'Inchon', 'Daejeon', 'Daegu', 'Pusan']
myVar = CharClass() // myVar CharClass 저장
str01 = ' ' // str01을 ' '으로 초기화
for i in myVar.a: // a.length 만큼 반복 함
    str01 = str + i[0] 
print(str01) 

정답 : SKIDDP