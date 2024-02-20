def find_even_index(arr):
    sum = 0
    for number in arr:
        sum += number
    left_sum = 0
    for index, number in enumerate(arr):
        if left_sum == ((sum - number) / 2):
            return index
        left_sum = left_sum + number
    return -1


print(find_even_index([1, 2, 3, 4, 3, 2, 1]))
print(find_even_index([20, 10, 30, 10, 10, 15, 35]))
