def zero(op=None):
    if op is None:
        return 0
    return op(0)


def one(op=None):
    if op is None:
        return 1
    return op(1)


def two(op=None):
    if op is None:
        return 2
    return op(2)


def three(op=None):
    if op is None:
        return 3
    return op(3)


def four(op=None):
    if op is None:
        return 4
    return op(4)


def five(op=None):
    if op is None:
        return 5
    return op(5)


def six(op=None):
    if op is None:
        return 6
    return op(6)


def seven(op=None):
    if op is None:
        return 7
    return op(7)


def eight(op=None):
    if op is None:
        return 8
    return op(8)


def nine(op=None):
    if op is None:
        return 9
    return op(9)


def plus(x):
    return lambda y: x + y


def minus(x):
    return lambda y: y - x


def times(x):
    return lambda y: x * y


def divided_by(x):
    return lambda y: y // x
