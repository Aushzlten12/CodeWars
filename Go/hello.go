package main

import "fmt"

func main() {
	fmt.Println(DNAStrand("GTAT"))
}

func DNAStrand(dna string) string {
	for i := 0; i < len(dna); i++ {
		if dna[i] == 'A' {
			dna = dna[:i] + "T" + dna[i+1:]
		} else if dna[i] == 'T' {
			dna = dna[:i] + "A" + dna[i+1:]
		} else if dna[i] == 'C' {
			dna = dna[:i] + "G" + dna[i+1:]
		} else if dna[i] == 'G' {
			dna = dna[:i] + "C" + dna[i+1:]
		}
	}
	return dna
}
