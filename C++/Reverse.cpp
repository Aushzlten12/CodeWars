#include <string>
std::string reverse_words(std::string str) {
  std::string reverse;
  int start = 0;
  for (int i = 0; i < str.size(); i++) {
    if (str[i] == ' ') {
      for (int j = i - 1; j >= start; j--) {
        reverse.push_back(str[j]);
      }
      reverse.push_back(str[i]);
      start = i + 1;
    }
    if (i == str.size() - 1) {
      for (int j = i; j >= start; j--) {
        reverse.push_back(str[j]);
      }
    }
  }
  return reverse;
}
