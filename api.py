import requests

# Define the URL of the API endpoint
url = "https://health.data.ny.gov/resource/keti-qx5t.json"

# Send a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    # Do something with the data, e.g., print it
    print(data)
else:
    print(f"Error: {response.status_code}")