export const addContact = async ({firstName, lastName, email, phone, organization, message}) => {

    const portalID = '21362998'
    const formID = "9f4e77c5-fd20-4bcf-af29-d4e6102af4d1"

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            fields: [
                {
                    "objectTypeId": "0-1",
                    "name": "firstname",
                    "value": firstName
                },
                {
                    "objectTypeId": "0-1",
                    "name": "lastname",
                    "value": lastName
                },
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": email
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": phone
                },
                {
                    "objectTypeId": "0-1",
                    "name": "company",
                    "value": organization
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": message
                }
            ]
        })
    };

    console.log(requestOptions);
    const Response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalID}/${formID}`, requestOptions);
    
    return Response.ok;
}