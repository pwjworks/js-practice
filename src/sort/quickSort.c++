#include <iostream>
#include <vector>
using namespace std;

void quickSort(vector<int> nums, int low, int high)
{
    if (low >= high) {
        return;
    }
    int i = low, j = high;
    int temp = nums[low];
    while (i < j) {
        while (nums[j] >= temp && i < j) {
            j--;
        }
        while (nums[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    nums[i] = temp;
    quickSort(nums, low, i - 1);
    quickSort(nums, i + 1, high);
}

int main()
{
    vector<int> nums(5);
    for (int i = 4; i >= 0; i++) {
        nums.push_back(i);
    }
    quickSort(nums, 0, 4);
    // for (auto it : nums) {
    //     cout << it;
    // }
    return 0;
}