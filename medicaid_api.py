import requests
import pandas as pd

# Define the URL of the API endpoint
url = "https://health.data.ny.gov/resource/keti-qx5t.json?CITY=BUFFALO"

# Send a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    
    # Convert the data into a pandas DataFrame
    df = pd.DataFrame(data)
    
    # Save the DataFrame to a CSV file in the existing 'data' folder
    csv_file_path = '../lighthouse_data/medicaid_data.csv' # local parent directory
    df.to_csv(csv_file_path, index=False)
    
    print(f"Data saved to {csv_file_path}")
else:
    print(f"Error: {response.status_code}")
