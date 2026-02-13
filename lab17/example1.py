import requests

api_url = "https://api.coingecko.com/api/v3/coins/markets"

params = {
    "vs_currency": "usd",
    "order": "market_cap_desc",
    "per_page": 5,
    "page": 1,
    "sparkline": "false"
}

response = requests.get(api_url, params=params)

if response.status_code == 200:
    data = response.json()
    for coin in data:
        print(f"{coin['name']}: ${coin['current_price']}")
else:
    print("Failed to retrieve data:", response.status_code)
