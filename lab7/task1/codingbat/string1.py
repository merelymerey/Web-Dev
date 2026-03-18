def hello_name(name):
    return "Hello " + name + "!"

def make_abba(a, b):
    return a + b + b + a

def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

def make_out_word(out, word):
    return out[:2] + word + out[2:]

def extra_end(s):
    return s[-2:] * 3

def first_two(s):
    return s[:2]

def first_half(s):
    return s[:len(s) // 2]

def without_end(s):
    return s[1:-1]

def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    return b + a + b

def non_start(a, b):
    return a[1:] + b[1:]

def left2(s):
    return s[2:] + s[:2]

def right2(s):
    return s[-2:] + s[:-2]

def theEnd(s, front):
    if front:
        return s[0]
    return s[-1]

def withouEnd2(s):
    if len(s) <= 2:
        return ""
    return s[1:-1]

def middleTwo(s):
    mid = len(s) // 2
    return s[mid - 1:mid + 1]

def endsLy(s):
    return s[-2:] == "ly"

def nTwice(s, n):
    return s[:n] + s[-n:]

def twoChar(s, index):
    if index < 0 or index + 2 > len(s):
        return s[:2]
    return s[index:index + 2]

def middleThree(s):
    mid = len(s) // 2
    return s[mid - 1:mid + 2]

def hasBad(s):
    return s[:3] == "bad" or s[1:4] == "bad"

def atFirst(s):
    if len(s) == 0:
        return "@@"
    if len(s) == 1:
        return s + "@"
    return s[:2]

def lastChars(a, b):
    first = a[0] if len(a) > 0 else "@"
    last = b[-1] if len(b) > 0 else "@"
    return first + last

def conCat(a, b):
    if len(a) > 0 and len(b) > 0 and a[-1] == b[0]:
        return a + b[1:]
    return a + b

def lastTwo(s):
    if len(s) < 2:
        return s
    return s[:-2] + s[-1] + s[-2]

def seeColor(s):
    if s[:3] == "red":
        return "red"
    if s[:4] == "blue":
        return "blue"
    return ""

def frontAgain(s):
    if len(s) < 2:
        return False
    return s[:2] == s[-2:]

def minCat(a, b):
    m = min(len(a), len(b))
    return a[-m:] + b[-m:] if m > 0 else ""

def extraFront(s):
    return s[:2] * 3

def without2(s):
    if len(s) >= 2 and s[:2] == s[-2:]:
        return s[2:]
    return s

def deFront(s):
    result = ""
    if len(s) > 0 and s[0] == "a":
        result += "a"
    if len(s) > 1 and s[1] == "b":
        result += "b"
    if len(s) > 2:
        result += s[2:]
    return result

def startWord(s, word):
    if len(s) < len(word):
        return ""
    if s[1:len(word)] == word[1:]:
        return s[:len(word)]
    return ""

def withoutX(s):
    if len(s) == 0:
        return s
    result = s
    if result[-1] == "x":
        result = result[:-1]
    if len(result) > 0 and result[0] == "x":
        result = result[1:]
    return result

def withoutX2(s):
    if len(s) == 0:
        return s
    result = list(s[:2])
    rest = s[2:]
    filtered = [c for c in result if c != "x"]
    return "".join(filtered) + rest
