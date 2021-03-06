import { initializeApp } from "firebase/app";

if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("dotenv").config();
}

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.AUTH_DOMAIN_KEY,
    projectId: process.env.PROJ_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// App has to be initialized before the getAuth() function
// is called in our other functions
export const app = initializeApp(firebaseConfig);

exports.users = require("./users/users");
