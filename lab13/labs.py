#lab 1
import re

text = "Call me at 555-1234 or at the office line 555-5678. For emergencies, dial 555-9999."

pattern = r"\d{3}-\d{4}"

phone_numbers = re.findall(pattern, text)

print("Phone numbers found", phone_numbers)

#lab 2

text1 = "Hello, world! Welcome to regex."
text2 = "Greetings! Hello, how are you?"

pattern = r"Hello"

match1 = re.match(pattern, text1)
print("Using re.match() on text1:")
if match1:
    print("Match found:", match1.group())
else:
    print("No match found.")

match2 = re.match(pattern, text2)
print("\nUsing re.match() on text2:")
if match2:
    print("Match found:", match2.group())
else:
    print("No match found.")

search_result = re.search(pattern, text2)
print("\nUsing re.search() on text2:")
if search_result:
    print("Found:", search_result.group())
else:
    print("No match found.")

#lab 3

import re

text = "There are 3 apples, 15 oranges, and 256 bananas in the basket."

pattern = r"\d+"

result = re.sub(pattern, "NUMBER", text)

print("Modified Text:", result)


#lab 4

import re

text = "For more info, contact us at support@example.com or sales-info@example.org."

pattern = r"\b\w+@\w+\.\w+\b"

emails = re.findall(pattern, text)

print("Email Addresses Found:", emails)

#lab 5

import re

text = "An apple a day keeps the doctor away. Even elephants enjoy eating."

pattern = r"\b[aeiou]\w*\b"

vowel_words = re.findall(pattern, text, re.IGNORECASE)

print("Words starting with a vowel:", vowel_words)
