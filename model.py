import ollama
import json

from medicaid_api import fetch_and_save_medicaid_data
from medicare_api import fetch_and_save_medicare_data

# pull user answers from questionnaire
questionnaire={'zip_code':'14201',
               'insurance_type':'Medicaid',
               'family_type': 'Family',
               'salary': '45,000'}

# choose database based on desired insurance type
if questionnaire['insurance_type'].lower()=='medicaid':
    providers_df=fetch_and_save_medicaid_data()
elif questionnaire['insurance_type'].lower()=='medicare':
    providers_df=fetch_and_save_medicare_data()

providers_df=providers_df[providers_df['zip_code'].str.startswith(questionnaire['zip_code'])]

# Convert relevant data to JSON
questionnaire_json=json.dumps(questionnaire) # patient data
providers_json = providers_df.to_json(orient='records', indent=4) # provider data
with open('jason/market_insurance_data.json', 'r') as file:
    marketplace_json = file.read()



response = ollama.chat(
    model="llama3.2",
    messages=[{'role': 'user', 'content':f'Here is patient data, {questionnaire_json}. Here are {questionnaire["insurance_type"]} providers in their area, {providers_json}. Here are private plans available in their area, {marketplace_json}. What affordable options do they have?'
               },
              ],
)

# Print the response content
response_content = response["message"]["content"]
print(response_content)

# Save the response to a text file
with open('response.txt', 'w') as response_file:
    response_file.write(response_content)