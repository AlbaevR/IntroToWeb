import requests

api_url = "https://api.example.com/data?type=test&limit=5"
response = requests.get(api_url)

if response.status_code == 200:
    data = response.json()
    print("Data received:", data)
else:
    print("Error fetching data")
