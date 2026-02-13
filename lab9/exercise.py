# common built-in exceptions
# zero division
import math

print(10/0)

#value error
x = int("abc")

#index error
lst = [1, 2, 3]
print(lst[5])

#key error
my_dict = {"name": "Alice"}
print(my_dict["age"])

#type error
print("2" + 2)

#file not found error
open("nonsense.txt")

#exception handling using try and except

try:
    x = int(input("Enter a number: "))
    print(10/x)
except ZeroDivisionError:
    print("You can't divide by zero")
except ValueError:
    print("Please enter a valid integer")

#handling multiple exceptions

try:
    x = int(input("Enter a number: "))
except (ZeroDivisionError, ValueError):
    print("Error: Invalid operation")

#using else in Exception handling

try:
    x = int(input("Enter a number: "))
    result = 10/x
except ZeroDivisionError:
    print("You can't divide by zero")
except ValueError:
    print("Please enter a valid integer")
else:
    print("Result:", result )

#using finally

try:
    file = open("nonsense.txt")
    content = file.read()
except FileNotFoundError:
    print("File not found")
finally:
    print("Closing file")
    file.close()

#rasing exceptions

def withdraw(amount, balance):
    if amount > balance:
        raise ValueError("Amount can't be greater than balance")
    return balance - amount

try:
    new_balance = withdraw(100, 100)
except ValueError as e:
    print(f"Error: {e}")

class Shape:
    def area(self):
        raise NotImplementedError("Not implemented")

#custom exceptions

class NegativeNumberError(Exception):
    def __init__(self, message = "Negative number is not allowed" ):
        self.message = message
        super().__init__(self.message)

def square_root(n):
    if n < 0:
        raise NegativeNumberError("Negative number is not allowed")
    return math.sqrt(n)

try:
    result = square_root(-9)
except NegativeNumberError as e:
    print(f"Error: {e}")

#debugging using assertions

def divide(a, b):
    assert a != 0, "Division by zero is not allowed"
    return a / b

print(divide(5, 0))



