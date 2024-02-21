#include <string>
std::string highestScoringWord(const std::string &str) {
  std::string highest;
  int scoringMax = 0;
  int scoreIteration = 0;
  std::string iterationWord = "";

  for (const char character : str) {
    if (character == ' ') {
      if (scoreIteration > scoringMax) {
        scoringMax = scoreIteration;
        highest = iterationWord;
      }
      scoreIteration = 0;
      iterationWord.clear();
      continue;
    }
    scoreIteration += static_cast<int>(character) - 96;
    iterationWord.push_back(character);
  }

  if (scoreIteration > scoringMax) {
    scoringMax = scoreIteration;
    highest = iterationWord;
  }

  return highest;
}
