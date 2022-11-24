// -----------------------------------------------------------------------------------
// ここから API キー
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// ここまで API キー
// -----------------------------------------------------------------------------------

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();