package main

func monkeyCount(n int) []int {
	// Your code here, happy coding!
	var myArray []int
	for i := 1; i <= n; i++ {
		myArray = append(myArray, i)
	}
	return myArray
}
