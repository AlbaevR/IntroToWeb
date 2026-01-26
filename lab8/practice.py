def greeting():
    print("Welcome to Python Programming!")
greeting()

def greeting_user(name):
    print(f"Hello, {name}! How are you?")
greeting_user()

def add(a, b):
    return a + b
result = add(5, 10)
print(f"The sum is {result}")

def rectangle_properties(length, width):
    area = length * width
    perimeter = 2 * length + 2 * width
    return area, perimeter

area, perimeter = rectangle_properties(5, 3)
print(f"Area: {area}, Perimeter: {perimeter}")

def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))

def display_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

display_info(name="Alice", age = 30, locacation="USA")

square = lambda x: x * x
print(square(4))

students = [("Alice", 18), ("Bob", 19), ("Charlie", 20)]
students.sort(key=lambda student: student[1])
print(students)

def local_scope():
    x = 10
    print(x)
local_scope()

x = 5

def modify_global():
    global x
    x += 10
modify_global()
print(x)

#recusrion

def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))

#docstring

def multiply(x, y):
    """This function returns the product of x and y."""
    return x * y

print(multiply.__doc__)

#exercice 1

def square (num):
    return num * num

print(square(4))

#exrecise 2

def sum_list (numbers):
    return sum(numbers)

print(sum_list([1, 2, 3]))

#exercise 3

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))

#exercise 4

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
    return True

print(is_prime(7))
print(is_prime(10))


