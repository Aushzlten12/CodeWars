#include <array>
#include <string>

using namespace std;

int solution(string roman) {
  // Your code here
  array<char, 7> caractersRoman = {'M', 'D', 'C', 'L', 'X', 'V', 'I'};
  array<int, 7> valuesRoman = {1000, 500, 100, 50, 10, 5, 1};

  int currentValue = 0;
  int accValue = 0;

  for (int i = roman.size() - 1; i >= 0; i--) {
    for (int j = 0; j < caractersRoman.size(); j++) {
      if (roman[i] == caractersRoman[j]) {
        if (valuesRoman[j] >= currentValue) {
          accValue += valuesRoman[j];
          currentValue = valuesRoman[j];
        } else {
          accValue -= valuesRoman[j];
        }
        continue;
      }
    }
  }
  return accValue;
}
