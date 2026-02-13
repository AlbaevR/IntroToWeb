#lists

fruits = ["apple", "banana", "cherry"]

print(fruits[0])

fruits.append("orange")

fruits.remove("banana")

for fruit in fruits:
    print(fruit)

#dictionaries

student = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 22,
    "grade": "A"
}

print(student["firstName"])

student["firstName"] = "Avin"

for key, value in student.items():
    print(f"{key}: {value}")

#sets

numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

numbers.add(11)

numbers.remove(3)

evens = {2, 4, 6, 8, 10, 12, 14}

print(numbers.intersection(evens))

#tuples

point = (10, 20)

print(point[0])

for coord in point:
    print(coord)