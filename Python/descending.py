"""
Module Description: This module contains a function for arranging digits.
"""


def descending_order(num):
    """
    Takes an integer 'num' and returns the same number with its digits
    arranged in descending order.

    Parameters:
    - num (int): The input integer.

    Returns:
    int: The input integer with its digits in descending order.
    """
    return int("".join(sorted(str(num), reverse=True)))


print(descending_order(12345))
