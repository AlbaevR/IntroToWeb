#lab 1
import json

json_string = '''
{
    "name": "Alice",
    "age": 21,
    "courses": ["Math", "Science", "History"]
}
'''

student_info = json.loads(json_string)

print("Deserialized Python object:")
print(student_info)


# lab 2

import json

student_info = {
    "name": "Alice",
    "age": 21,
    "courses": ["Math", "Science", "History"]
}

filename = "student.json"

with open(filename, "w") as file:
    json.dump(student_info, file, indent=4)

print(f"Data has been written to {filename}")

with open(filename, "r") as file:
    data_loaded = json.load(file)

print("Data loaded from the JSON file:")
print(data_loaded)


