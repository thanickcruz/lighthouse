import ollama

response = ollama.chat(
    model="llama3.2",
    messages=[{'role': 'user', 'content':''
               },
              ],
)

print(response["message"]["content"])