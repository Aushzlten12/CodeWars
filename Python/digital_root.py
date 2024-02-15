def digital_root(n):
    while n // 10 >= 1:
        splited = list(str(n))
        acc = 0
        for i in splited:
            acc += int(i)
        n = acc
    return n


digital_root(132189)
