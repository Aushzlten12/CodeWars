#include <algorithm>
#include <vector>
class Kata {
public:
  std::vector<int> sortArray(std::vector<int> array) {
    std::vector<int> odds;
    for (const int number : array) {
      if (number & 1)
        odds.push_back(number);
    }
    std::sort(odds.begin(), odds.end());
    int indexOdd = 0;
    for (int i = 0; i < array.size(); i++) {
      if (array[i] & 1) {
        array[i] = odds[indexOdd];
        indexOdd++;
      }
    }

    return array;
  }
};
