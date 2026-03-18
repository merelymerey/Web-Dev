n = int(input())
fib_a, fib_b = 0, 1
for _ in range(n):
    print(fib_a, end=" ")
    fib_a, fib_b = fib_b, fib_a + fib_b
print()
