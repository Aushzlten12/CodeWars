#include "./End.cpp"
#include "./HighestScoringWord.cpp"
#include "./Reverse.cpp"
#include "./RomanNumerals.cpp"
#include "./highAndLow.cpp"
#include "./valid_braces.cpp"
#include <iostream>
#include <ostream>
#include <string>

int main(int argc, char *argv[]) {
  std::string reverse_word = reverse_words("a b c d");
  std::cout << reverse_word << std::endl;
  int solutionRoman = solution("MMVIII");
  std::cout << solutionRoman << std::endl;
  bool solution = solutionEnd("abcde", "e");
  std::cout << solution << std::endl;
  std::string maxAndmin = highAndLow("1 2 3");
  std::cout << maxAndmin << std::endl;
  bool value = valid_braces("([{}])");
  std::cout << value << std::endl;
  std::string high =
      highestScoringWord("what time are we climbing up the volcano");
  std::cout << high << std::endl;
  return 0;
}
