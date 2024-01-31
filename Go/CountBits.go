package main

func CountBits(number uint) int {
	var count int
	for number > 0 {
		if number&1 == 1 {
			count++
		}
		number = number >> 1
	}
	return count
}
