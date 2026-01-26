from numpy.ma.core import product

print("hello world")

name = input("Enter your name: ")
age = input("Enter your age: ")
print("Hello " + name + "!", "You are " + age + " years old")

num1, num2, num3 = map(int, input("Enter three numbers separated by space: ").split())
total = num1 + num2 + num3
avg = total / 3
product = num1 * num2 * num3

print(f"Sum: {total}, Average: {avg}, Product: {product}")
