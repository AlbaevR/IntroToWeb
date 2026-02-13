filename = "sample_text.txt"

content = """Hello, world!
This is a sample text file.
It contains multiple lines of text for testing file operations."""

with open(filename, 'w') as file:
    file.write(content)

print(f"Content has been written to {filename}")

with open(filename, 'r') as file:
    read_content = file.read()

print("Content read from the file:")
print(read_content)


#lab 2

import csv

csv_filename = "people.csv"

data = [
    ["Name", "Age", "City"],
    ["Alice", "30", "New York"],
    ["Bob", "25", "Los Angeles"],
    ["Charlie", "35", "Chicago"]
]

with open(csv_filename, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(data)

print(f"Data has been written to {csv_filename}")

print("Reading data from the CSV file:")
with open(csv_filename, 'r', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)


#lab 3

filename = "sample_text.txt"
additional_text = "\nThis line is appended to the file."

with open(filename, "a") as file:
    file.write(additional_text)

print(f"Additional text has been appended to {filename}")

with open(filename, "r") as file:
    updated_content = file.read()

print("Updated content of the file:")
print(updated_content)
