import requests
import pandas as pd
import urllib.parse
import json

def fetch_and_save_medicare_data():
    # Define the readable SQL query
    query = '[SELECT * FROM 10ab1332-3857-537a-8ffa-cbe91dbe4c65][WHERE City\Town = "BUFFALO"]'
    
    # URL-encode the query
    encoded_query = urllib.parse.quote(query)
    
    # Construct the full URL
    url = f'https://data.cms.gov/provider-data/api/1/datastore/sql?query={encoded_query}&show_db_columns'
    
    # Send a GET request to the API endpoint
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        
        # Convert the data into a pandas DataFrame
        df = pd.DataFrame(data)
        
        # Remove duplicate rows
        df = df.drop_duplicates()
        
        # Convert DataFrame back to JSON format
        json_data = df.to_json(orient='records', indent=4)
        
        # Save the JSON data to a file in the existing 'data' folder
        json_file_path = '../lighthouse_data/medicare_data.json'  # local parent directory
        with open(json_file_path, 'w') as json_file:
            json_file.write(json_data)
        
        print(f"Data saved to {json_file_path}")
        
        # Return the DataFrame
        return df
    else:
        print(f"Error: {response.status_code}")
        return None  # Return None in case of failure

# Call the function and store the returned DataFrame
medicare_df = fetch_and_save_medicare_data()
