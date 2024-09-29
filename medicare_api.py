import requests
import pandas as pd
import urllib.parse

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

    # Save the DataFrame to a CSV file in the existing 'data' folder
    csv_file_path = '../lighthouse_data/medicare_data.csv' # local parent directory
    df.to_csv(csv_file_path, index=False)
    
    print(f"Data saved to {csv_file_path}")
else:
    print(f"Error: {response.status_code}")
