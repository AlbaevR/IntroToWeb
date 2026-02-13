import requests

api_url = "https://api.example.com/weather"

params = {
    "city": "New York",
    "apikey": "your_api_key_here"
}

response = requests.get(api_url, params=params)

if response.status_code == 200:
    weather_data = response.json()
    print("Current Weather Data:")
    print(weather_data)
else:
    print("Failed to retrieve data. Status code:", response.status_code)
