def string_times(s, n):
    return s * n

def front_times(s, n):
    return s[:3] * n

def string_bits(s):
    return s[::2]

def string_splosion(s):
    result = ""
    for i in range(len(s) + 1):
        result += s[:i]
    return result

def last2(s):
    if len(s) < 2:
        return 0
    last = s[-2:]
    count = 0
    for i in range(len(s) - 2):
        if s[i:i + 2] == last:
            count += 1
    return count

def array_count9(nums):
    count = 0
    for n in nums:
        if n == 9:
            count += 1
    return count

def array_front9(nums):
    for i in range(min(4, len(nums))):
        if nums[i] == 9:
            return True
    return False

def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False

def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i + 2] == b[i:i + 2]:
            count += 1
    return count

def has271(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 2 and nums[i + 1] == 7:
            if abs(nums[i + 2] - 1) <= 1:
                return True
    return False
