#include <climits>
#include <string>

std::string highAndLow(const std::string &numbers) {
  int maximo = INT_MIN, minimo = INT_MAX;
  std::string foundNumber = "";
  for (int i = 0; i < numbers.size(); i++) {
    if (numbers[i] == ' ') {
      int number = std::stoi(foundNumber);
      if (number > maximo) {
        maximo = number;
      }
      if (number < minimo) {
        minimo = number;
      }
      foundNumber = "";
    }
    foundNumber.push_back(numbers[i]);
  }
  int number = std::stoi(foundNumber);
  if (number > maximo) {
    maximo = number;
  }
  if (number < minimo) {
    minimo = number;
  }

  std::string output = std::to_string(maximo) + " " + std::to_string(minimo);
  return output;
}
