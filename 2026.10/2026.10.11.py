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