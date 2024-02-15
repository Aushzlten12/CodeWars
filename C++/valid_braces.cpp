#include <iostream>
#include <ostream>
#include <string>
bool valid_braces(std::string braces) {
  if (braces.length() <= 1)
    return false;
  if (braces.length() % 2 == 1)
    return false;
  std::string accuString = "";
  for (const auto &element : braces) {
    accuString.push_back(element);
    std::cout << accuString << std::endl;
    if (accuString.length() >= 2) {
      std::string currentString = "";
      currentString.push_back(accuString[accuString.length() - 2]);
      currentString.push_back(accuString[accuString.length() - 1]);
      if (currentString == "{}" or currentString == "[]" or
          currentString == "()") {
        accuString.pop_back();
        accuString.pop_back();
      }
    }
  }
  if (accuString == "{}" or accuString == "()" or accuString == "[]" or
      accuString == "") {
    return true;
  } else {
    return false;
  }
}
