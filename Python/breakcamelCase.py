def solution(s):
    output = ""
    for i in s:
        if i.isupper():
            output = output + " "
        output = output + i
    return output


print(solution("camelSolution"))
