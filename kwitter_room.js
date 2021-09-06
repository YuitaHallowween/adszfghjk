
//Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC55nBsI6Cmf6Si0DJMcNlG9XS-ovxwFfU",
      authDomain: "kwitter2-901b5.firebaseapp.com",
      databaseURL: "https://kwitter2-901b5-default-rtdb.firebaseio.com",
      projectId: "kwitter2-901b5",
      storageBucket: "kwitter2-901b5.appspot.com",
      messagingSenderId: "22951857163",
      appId: "1:22951857163:web:8511932e7b6a34a9f44b0e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    function addUser()
    {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").chlid(user_name).update({
        purpose : "adding user"
        });
    }