integer_input = int(input("Enter an integer: "))
float_input = float(input("Enter a float: "))
str_input = str(input("Enter a string: "))

print(type(integer_input))
print(type(float_input))
print(type(str_input))

text = "123"
number = int(text)
number_float = float(number)

print(type(number_float))
print(type(number))

person = {
    "name": "Bob",
    "age": 30,
}
print(person["name"])

my_set = {1, 2, 3}
my_set.add(4)
my_set.remove(2)
print(3 in my_set)