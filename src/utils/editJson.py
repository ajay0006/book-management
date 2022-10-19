import uuid
import json

order = ['id', 'author', 'title', 'year', 'country', 'language', 'pages', 'link', 'imageLink']
payload = []
with open('books.json', 'r') as openfile:
    data = json.load(openfile)

for i in data['books']:
    valueToAdd = {'id': uuid.uuid4().hex}
    i.update(valueToAdd)
    entity = dict([(f, i.get(f)) for f in order])
    payload.append(entity)
    print(i)

print(data)
print(payload)
finalPayload = {'books': payload}
print(finalPayload)


with open('books2.json', 'w') as outfile:
    json.dump(finalPayload, outfile)