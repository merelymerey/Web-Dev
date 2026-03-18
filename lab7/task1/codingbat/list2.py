def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    nums = sorted(nums)
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total

def sum67(nums):
    total = 0
    inside = False
    for n in nums:
        if n == 6:
            inside = True
        if not inside:
            total += n
        if inside and n == 7:
            inside = False
    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False

def lucky13(nums):
    return 1 not in nums and 3 not in nums

def sum28(nums):
    return nums.count(2) * 2 == 8

def more14(nums):
    return nums.count(1) > nums.count(4)

def fizzArray(n):
    return list(range(n))

def only14(nums):
    return all(n == 1 or n == 4 for n in nums)

def fizzArray2(n):
    return [str(i) for i in range(n)]

def no14(nums):
    return 1 not in nums and 4 not in nums

def isEverywhere(nums, val):
    for i in range(len(nums) - 1):
        if nums[i] != val and nums[i + 1] != val:
            return False
    return True

def either24(nums):
    has2 = False
    has4 = False
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            has2 = True
        if nums[i] == 4 and nums[i + 1] == 4:
            has4 = True
    return has2 != has4

def matchUp(a, b):
    count = 0
    for i in range(len(a)):
        if a[i] != 0 and b[i] != 0 and abs(a[i] - b[i]) <= 2:
            count += 1
    return count

def has77(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 7:
            if nums[i + 1] == 7:
                return True
            if i + 2 < len(nums) and nums[i + 2] == 7:
                return True
    return False

def has12(nums):
    found1 = False
    for n in nums:
        if n == 1:
            found1 = True
        if found1 and n == 2:
            return True
    return False

def modThree(nums):
    for i in range(len(nums) - 2):
        if nums[i] % 2 == nums[i + 1] % 2 == nums[i + 2] % 2:
            return True
    return False

def haveThree(nums):
    count = 0
    for i in range(len(nums)):
        if nums[i] == 3:
            if i > 0 and nums[i - 1] == 3:
                return False
            count += 1
    return count == 3

def twoTwo(nums):
    i = 0
    while i < len(nums):
        if nums[i] == 2:
            count = 0
            while i < len(nums) and nums[i] == 2:
                count += 1
                i += 1
            if count < 2:
                return False
        else:
            i += 1
    return True

def sameEnds(nums, length):
    return nums[:length] == nums[-length:]

def tripleUp(nums):
    for i in range(len(nums) - 2):
        if nums[i + 1] == nums[i] + 1 and nums[i + 2] == nums[i] + 2:
            return True
    return False

def fizzArray3(start, end):
    return list(range(start, end))

def shiftLeft(nums):
    if len(nums) == 0:
        return nums
    return nums[1:] + [nums[0]]

def tenRun(nums):
    result = []
    current = None
    for n in nums:
        if n % 10 == 0:
            current = n
        if current is not None:
            result.append(current)
        else:
            result.append(n)
    return result

def pre4(nums):
    return nums[:nums.index(4)]

def post4(nums):
    last_idx = len(nums) - 1 - nums[::-1].index(4)
    return nums[last_idx + 1:]

def notAlone(nums, val):
    result = list(nums)
    for i in range(1, len(nums) - 1):
        if nums[i] == val and nums[i - 1] != val and nums[i + 1] != val:
            result[i] = max(nums[i - 1], nums[i + 1])
    return result

def zeroFront(nums):
    zeros = [n for n in nums if n == 0]
    others = [n for n in nums if n != 0]
    return zeros + others

def withoutTen(nums):
    result = [n for n in nums if n != 10]
    result += [0] * (len(nums) - len(result))
    return result

def zeroMax(nums):
    result = list(nums)
    for i in range(len(result)):
        if result[i] == 0:
            max_odd = 0
            for j in range(i + 1, len(result)):
                if result[j] % 2 == 1 and result[j] > max_odd:
                    max_odd = result[j]
            result[i] = max_odd
    return result

def evenOdd(nums):
    evens = [n for n in nums if n % 2 == 0]
    odds = [n for n in nums if n % 2 != 0]
    return evens + odds

def fizzBuzz(start, end):
    result = []
    for i in range(start, end):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result
