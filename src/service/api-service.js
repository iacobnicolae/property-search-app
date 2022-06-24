import axios from "axios";

const apiKey = 'xYfyViCWX3ghasznzOK3jWwFhLtDRrUN';

export default axios.create({
    baseURL: "https://api-beta.estateapps.co.uk/v2",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {
      'api-key': apiKey
    }
});
