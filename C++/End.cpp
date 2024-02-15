#include <string>
bool solutionEnd(std::string const &str, std::string const &ending) {
  if (str == "" || ending == "")
    return true;
  int difference = str.size() - ending.size();
  for (int i = ending.size() - 1; i >= 0; i--) {
    if (str[i + difference] != ending[i])
      return false;
  }
  return true;
}
