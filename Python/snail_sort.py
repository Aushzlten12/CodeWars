def snail(snail_map):
    numbers = []
    while snail_map:
        numbers += snail_map.pop(0)
        if snail_map and snail_map[0]:
            for row in snail_map:
                numbers.append(row.pop())
        if snail_map:
            numbers += snail_map.pop()[::-1]
        if snail_map and snail_map[0]:
            for row in snail_map[::-1]:
                numbers.append(row.pop(0))
    return numbers


snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
