
export const addContact = async ({ firstName, lastName, email, phone, organization, message }) => {

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
    /*    const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalID}/${formID}`, requestOptions);
       const res = await response.json()
       console.log("submit_res", res)
       if (res.inlineMessage){
           return {
               status: 'success',
               data: {
                   inlineMessage: res.inlineMessage
               }
           }
       }
       return {
           status: 'failed',
           data: res.errors
       }; */



    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    var raw = JSON.stringify({
        "properties": {
            "company": organization,
            email,
            "firstname": firstName,
            "lastname": lastName,
            phone,
            "website": "biglytics.net"
        }
    });

    var requestOptions2 = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const APIKEY = process.env.REACT_APP_HUBSPOT_APIKEY;
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    console.log("APIKEY", APIKEY, raw)

    // const res2 = await fetch(`${REACT_APP_API_URL}/getContacts`);
    // const data2 =  await res2.json()
    // console.log('data2', data2)


    const res = fetch(`${REACT_APP_API_URL}/createContact`, requestOptions2)
        .then(response => response.json())
        .then(data => {
            console.log('data +++', data);
        })
        .catch(e => console.log('send data error ===', e));
    // const data = await res.json()
    // console.log('data', data)
}