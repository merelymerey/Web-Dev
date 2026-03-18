n = int(input())
max_val = None
for _ in range(n):
    x = int(input())
    if max_val is None or x > max_val:
        max_val = x
print(max_val)
