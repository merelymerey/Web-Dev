def double_char(s):
    return "".join(c * 2 for c in s)

def count_hi(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i:i + 2] == "hi":
            count += 1
    return count

def cat_dog(s):
    return s.count("cat") == s.count("dog")

def count_code(s):
    count = 0
    for i in range(len(s) - 3):
        if s[i] == "c" and s[i + 1] == "o" and s[i + 3] == "e":
            count += 1
    return count

def end_other(a, b):
    a_lower = a.lower()
    b_lower = b.lower()
    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)

def xyz_there(s):
    for i in range(len(s) - 2):
        if s[i:i + 3] == "xyz":
            if i == 0 or s[i - 1] != ".":
                return True
    return False

def bob_there(s):
    for i in range(len(s) - 2):
        if s[i] == "b" and s[i + 2] == "b":
            return True
    return False

def xyBalance(s):
    last_x = s.rfind("x")
    if last_x == -1:
        return True
    return "y" in s[last_x:]

def mixString(a, b):
    result = ""
    i = 0
    while i < len(a) or i < len(b):
        if i < len(a):
            result += a[i]
        if i < len(b):
            result += b[i]
        i += 1
    return result

def repeatEnd(s, n):
    return s[-n:] * n

def repeatFront(s, n):
    result = ""
    for i in range(n, 0, -1):
        result += s[:i]
    return result

def repeatSeparator(word, sep, count):
    if count == 0:
        return ""
    result = word
    for _ in range(count - 1):
        result += sep + word
    return result

def prefixAgain(s, n):
    prefix = s[:n]
    return prefix in s[n:]

def xyzMiddle(s):
    length = len(s)
    mid = length // 2
    if length < 3:
        return False
    if length % 2 == 1:
        return s[mid - 1:mid + 2] == "xyz"
    return s[mid - 2:mid + 1] == "xyz" or s[mid - 1:mid + 2] == "xyz"

def getSandwich(s):
    first = s.find("bread")
    last = s.rfind("bread")
    if first == last:
        return ""
    return s[first + 5:last]

def sameStarChar(s):
    for i in range(1, len(s) - 1):
        if s[i] == "*":
            if s[i - 1] != s[i + 1]:
                return False
    return True

def oneTwo(s):
    result = ""
    for i in range(0, len(s) - 2, 3):
        result += s[i + 1:i + 3] + s[i]
    return result

def zipZap(s):
    result = ""
    i = 0
    while i < len(s):
        if i + 2 < len(s) and s[i] == "z" and s[i + 2] == "p":
            result += "zp"
            i += 3
        else:
            result += s[i]
            i += 1
    return result

def starOut(s):
    result = ""
    for i in range(len(s)):
        if s[i] == "*":
            continue
        if i > 0 and s[i - 1] == "*":
            continue
        if i < len(s) - 1 and s[i + 1] == "*":
            continue
        result += s[i]
    return result

def plusOut(s, word):
    result = list("+" * len(s))
    i = 0
    while i <= len(s) - len(word):
        if s[i:i + len(word)] == word:
            for j in range(len(word)):
                result[i + j] = word[j]
            i += len(word)
        else:
            i += 1
    return "".join(result)

def wordEnds(s, word):
    result = ""
    wlen = len(word)
    for i in range(len(s) - wlen + 1):
        if s[i:i + wlen] == word:
            if i > 0:
                result += s[i - 1]
            if i + wlen < len(s):
                result += s[i + wlen]
    return result
