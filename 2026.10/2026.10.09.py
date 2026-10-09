scores = {'a': 80, 'b': 90, 'c': 75}
result = {k: v + 5 for k, v in scores.items() if v >= 80}
print(result)

""" 
for k, v in scores.items()
    if v >= 80:
        result[k] = v + 5

정답: {'a': 85, 'b': 95}
"""