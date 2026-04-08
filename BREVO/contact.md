***

title: Manage your contacts in Brevo
subtitle: Learn how to create and update contacts using the Brevo API
slug: docs/synchronise-contact-lists
------------------------------------

Import contacts to Brevo to send email campaigns, SMS, and marketing automation messages. Use the API to create and update contacts programmatically.

<Note>
  Import at least the contact's email address. You can also import additional contact attributes such as first name, last name, birthday, mobile phone number, and other custom fields.
</Note>

<Info title="Other methods to manage contacts">
  To manage contacts through the Brevo app or import contacts using CSV files, see the [help center tutorial](https://help.brevo.com/hc/en-us/articles/115000719584-Importing-your-contacts-into-SendinBlue).
</Info>

## Before you start

<Steps>
  ### Get your API key

  Retrieve your API key from [your account settings](https://my.brevo.com/account/settings). Read the [Authentication guide](/docs/authentication-schemes) for details.

  ### Understand the API

  If you're new to the Marketing API, read the [Quickstart](/docs/quickstart) guide.
</Steps>

## Create a contact

Create contacts using the `POST /v3/contacts` endpoint. You can create email contacts, SMS contacts, or both.

### Endpoint

<EndpointRequestSnippet endpoint="POST /contacts" />

### Request parameters

Create different types of contacts:

<EndpointSchemaSnippet endpoint="POST /contacts" selector="request" />

**Email contact:**

```json
{
  "email": "thomas.bianchi@example.com"
}
```

**SMS contact:**

```json
{
  "attributes": {
    "SMS": "0612345678"
  }
}
```

**Email and SMS contact with attributes:**

```json
{
  "email": "thomas.bianchi@example.com",
  "attributes": {
    "SMS": "0612345678",
    "LASTNAME": "Bianchi",
    "FIRSTNAME": "Thomas",
    "DELIVERYADDRESS": "176 Boulevard des fleurs, 75014 Paris, France"
  }
}
```

**Assign to contact lists:**

```json
{
  "email": "thomas.bianchi@example.com",
  "listIds": [1, 5]
}
```

<Info>
  Get contact list IDs from [Contacts > Lists](https://my.brevo.com/lists) in the Brevo platform or using the [get all lists](/reference/get-lists) endpoint.
</Info>

### Request example

```curl
curl --request POST \
  --url https://api.brevo.com/v3/contacts \
  --header 'accept: application/json' \
  --header 'api-key: YOUR_API_KEY' \
  --header 'content-type: application/json' \
  --data '{
    "email": "john.doe@example.com",
    "attributes": {
      "SMS": "0611223344",
      "FNAME": "John",
      "LNAME": "Doe"
    },
    "listIds": [11],
    "emailBlacklisted": false,
    "smsBlacklisted": false,
    "updateEnabled": false
  }'
```

### Response

A successful response returns status code **201** with the contact ID:

```json
{
  "id": 123
}
```

<Error>
  If the request fails, you'll receive a 400 error. Common errors include:

  * Invalid email address or phone number
  * Email or phone number already exists in your database
  * Missing or invalid API key
  * Missing `Content-Type: application/json` header
</Error>

### Verify the contact

After creating a contact, verify it was created:

1. Check the [Contacts section](https://my.brevo.com/users/list) in the Brevo platform
2. Use the [retrieve contact information](/reference/get-contact-info) endpoint

<Info title="API Reference testing">
  You can test the endpoint using the [API Reference](/reference/create-contact). When testing, you make real API calls that count against your rate limits and credits.
</Info>

### Code examples

<CodeBlocks>
  <CodeBlock title="curl">
    ```bash
    curl --request POST \
      --url https://api.brevo.com/v3/contacts \
      --header 'api-key:YOUR_API_KEY' \
      --header 'Content-Type: application/json' \
      --data '{"email": "testmail@example.com", "attributes": {"SMS": "0611223344", "FNAME": "John", "LNAME": "Doe"}, "listIds": [11], "emailBlacklisted": false, "smsBlacklisted": false, "updateEnabled": false}'
    ```
  </CodeBlock>
</CodeBlocks>

### Manage contact lists

**Assign contacts to lists:**

```json
{
  "listIds": [1, 5]
}
```

**Unassign contacts from lists:**

```json
{
  "unlinkListIds": [1]
}
```

## Common use cases

### Create a contact with email and attributes

```json
{
  "email": "customer@example.com",
  "attributes": {
    "FNAME": "Jane",
    "LNAME": "Smith",
    "BIRTHDATE": "1990-01-15",
    "CITY": "Paris"
  },
  "listIds": [1]
}
```

### Update contact attributes

```json
{
  "attributes": {
    "CITY": "London",
    "COUNTRY": "UK"
  }
}
```

### Add contact to multiple lists

```json
{
  "listIds": [1, 2, 3]
}
```

## Troubleshooting

### Error: Invalid email address

**Problem**: Request fails with email validation error.

**Solution**: Verify the email address format is correct (e.g., `user@example.com`).

### Error: Contact already exists

**Problem**: Request fails because contact already exists.

**Solution**: Set `updateEnabled: true` in the create request to update existing contacts, or use the update endpoint instead.

### Error: Missing API key

**Problem**: Request fails with authentication error.

**Solution**: Ensure the `api-key` header is included in your request with a valid API key.

## Next steps

* Learn about [contact attributes](/reference/get-attributes)
* Manage [contact lists](/reference/get-lists)
* Import contacts using [CSV files](https://help.brevo.com/hc/en-us/articles/115000719584-Importing-your-contacts-into-SendinBlue)
* Review the [full API reference](/reference/create-contact)
