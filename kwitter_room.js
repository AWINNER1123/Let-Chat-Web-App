
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB4yBGt_d2ifjIwVgcgBhlRwbCyBT_8w1w",
      authDomain: "kwitter-72a16.firebaseapp.com",
      databaseURL: "https://kwitter-72a16-default-rtdb.firebaseio.com",
      projectId: "kwitter-72a16",
      storageBucket: "kwitter-72a16.appspot.com",
      messagingSenderId: "618895519915",
      appId: "1:618895519915:web:4edae7bb0782cb952007ee"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
