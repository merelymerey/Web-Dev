def power(base, exp):
    result = 1
    for _ in range(exp):
        result *= base
    return result

a = int(input())
b = int(input())
print(power(a, b))
