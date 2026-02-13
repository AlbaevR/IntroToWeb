from flask import Flask, jsonify, request

app = Flask(__name__)

weather_data = {
    "New York": {"temperature": 25, "condition": "Sunny"},
    "London": {"temperature": 15, "condition": "Cloudy"},
    "Tokyo": {"temperature": 20, "condition": "Rainy"}
}

@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get("city")
    if city in weather_data:
        return jsonify({city: weather_data[city]})
    else:
        return jsonify({"error": "City not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
