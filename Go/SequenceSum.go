package main

func SequenceSum(start, end, step int) int {
	var sum int
	for i := start; i <= end; i += step {
		sum += i
	}
	if end < start {
		return 0
	}
	return sum
}
