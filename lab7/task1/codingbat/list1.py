def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6

def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]

def make_pi():
    return [3, 1, 4]

def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]

def sum3(nums):
    return sum(nums)

def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]

def reverse3(nums):
    return [nums[2], nums[1], nums[0]]

def max_end3(nums):
    m = max(nums[0], nums[-1])
    return [m, m, m]

def sum2(nums):
    if len(nums) == 0:
        return 0
    if len(nums) == 1:
        return nums[0]
    return nums[0] + nums[1]

def middle_way(a, b):
    return [a[1], b[1]]

def make_ends(nums):
    return [nums[0], nums[-1]]

def has23(nums):
    return 2 in nums or 3 in nums

def no23(nums):
    return 2 not in nums and 3 not in nums

def makeLast(nums):
    result = [0] * (len(nums) * 2)
    result[-1] = nums[-1]
    return result

def double23(nums):
    return nums.count(2) == 2 or nums.count(3) == 2

def fix23(nums):
    result = list(nums)
    for i in range(len(result) - 1):
        if result[i] == 2 and result[i + 1] == 3:
            result[i + 1] = 0
    return result

def start1(a, b):
    count = 0
    if len(a) > 0 and a[0] == 1:
        count += 1
    if len(b) > 0 and b[0] == 1:
        count += 1
    return count

def biggerTwo(a, b):
    if sum(b) > sum(a):
        return b
    return a

def makeMiddle(nums):
    mid = len(nums) // 2
    return [nums[mid - 1], nums[mid]]

def plusTwo(a, b):
    return a + b

def swapEnds(nums):
    if len(nums) < 2:
        return nums
    result = list(nums)
    result[0], result[-1] = result[-1], result[0]
    return result

def midThree(nums):
    mid = len(nums) // 2
    return [nums[mid - 1], nums[mid], nums[mid + 1]]

def maxTriple(nums):
    return max(nums[0], nums[len(nums) // 2], nums[-1])

def frontPiece(nums):
    return nums[:2]

def unlucky1(nums):
    if len(nums) >= 2 and nums[0] == 1 and nums[1] == 3:
        return True
    if len(nums) >= 3 and nums[1] == 1 and nums[2] == 3:
        return True
    if len(nums) >= 2 and nums[-2] == 1 and nums[-1] == 3:
        return True
    return False

def make2(a, b):
    return (a + b)[:2]

def front11(a, b):
    result = []
    if len(a) > 0:
        result.append(a[0])
    if len(b) > 0:
        result.append(b[0])
    return result
