def exp_base(n, b):
    i = 0
    while n % b == 0:
        n //= b
        i += 1
    return i


def zeros(n):
    indice_2 = 0
    indice_5 = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            indice_2 += exp_base(i, 2)
        if i % 5 == 0:
            indice_5 += exp_base(i, 5)
    return min(indice_2, indice_5)


print(zeros(1000000))
