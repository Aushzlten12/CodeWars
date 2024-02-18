def fib(n):
    a = 0
    b = 1
    for _ in range(n):
        tmp = a + b
        a = b
        b = tmp
    return a


def product_fib(_prod):
    n = 0
    while n >= 0:
        n += 1
        if fib(n) >= _prod**0.5:
            break
    print(fib(n))
    if fib(n - 1) * fib(n) == _prod:
        return [fib(n - 1), fib(n), True]
    if fib(n) * fib(n + 1) == _prod:
        return [fib(n + 1), fib(n), True]
    while n > 0:
        if fib(n) * fib(n - 1) > _prod:
            return [fib(n - 1), fib(n), False]
        n += 1


print(product_fib(10630578673619365632927588117244525750693429085645607871930))
print(product_fib(1))
