import requests
import pandas as pd
import json

def fetch_and_save_medicaid_data():
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
        
        # Convert DataFrame back to JSON format
        json_data = df.to_json(orient='records', indent=4)
        
        # Save the JSON data to a file in the existing 'data' folder
        json_file_path = '../lighthouse_data/medicaid_data.json'  # local parent directory
        with open(json_file_path, 'w') as json_file:
            json_file.write(json_data)
        
        print(f"Data saved to {json_file_path}")
        
        # Return the DataFrame
        return df
    else:
        print(f"Error: {response.status_code}")
        return None  # Return None in case of failure