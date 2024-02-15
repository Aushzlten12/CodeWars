def func_i(a):
    return a + 1


def func_d(a):
    return a - 1


def func_s(a):
    return a**2


def func_o(a, array):
    return array + [a]


def parse(data):
    value = 0
    array_ac = []
    dicc_functions = {
        "i": func_i,
        "d": func_d,
        "s": func_s,
        "o": func_o,
    }
    for i in data:
        if i != "o" and i != "d" and i != "s" and i != "i":
            continue
        if i == "o":
            function_o = dicc_functions["o"]
            array_ac = function_o(value, array_ac)
        else:
            function_another = dicc_functions[i]
            value = function_another(value)

    return array_ac


parse("iiisdoso")
