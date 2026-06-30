scores = {"a": 2, "b": 4}
scores["a"] += 3
print(scores["a"] + scores.get("c", 1))

""" 
 - 파이썬에서 get() 메서드는 (key, default)로 동작
 정답: 6
"""