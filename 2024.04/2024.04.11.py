class Cls:
    x, y = 12, 12
    def add(self, i): """ self는 함수내의 변수를 사용한다는 의미, i =3 으로 초기화 """
        if self.x > self.y:
            self.x = self.x - i
            self.y = self.y + i
        else: // else문 실행
            self.x = self.x + i  """ 15 """
            self.y = self.y - i  """ 9 """
a = Cls()
a.add(3)  """ add() 함수의 인자로 3전달 """
print(a.x, a.y)

""" 정답: 15, 9 """