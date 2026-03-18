string = input()
sub_string = input()
count = 0
for i in range(len(string) - len(sub_string) + 1):
    if string[i:i + len(sub_string)] == sub_string:
        count += 1
print(count)
