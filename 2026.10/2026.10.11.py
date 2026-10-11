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