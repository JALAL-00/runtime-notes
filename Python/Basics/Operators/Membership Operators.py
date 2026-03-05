#In Python, in and not in are the membership operators that are used to test whether a value or variable is in a sequence.

x = 24
y = 20
list = [10, 20, 30, 40, 50]

if (x not in list):
    print("X is not in the list")
else:
    print("X is in the list")

if (y in list):
    print("Y is in the list")
else:
    print("Y is not in the list")