window.onload = (function() {
    document.querySelector("#loading").style.display = "block";
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            window.location = "login.html";
            document.querySelector("#loading").style.display = "block";
        }
        document.querySelector("#loading").style.display = "none";
        console.log(user);
        const key = firebase
            .database()
            .ref()
            .child("users");

        key.on("child_added", (snap) => {
            var email = snap.child("personal/" + "userEmail").val();
            // if (email=="stevenborngreat@gmail.com") {
            //     console.log("working")
            //     window.location="exist.html"
            // }
            if (user.email == email) {
                document.querySelector("#loading").style.display = "block";
                window.location = "profile.html";
            } else {
                console.log("you are allow");
            }
        });
        //     if (user) {
        //          console.log(user.email)
        //          console.log(email)

        //         user.getIdTokenResult().then(idTokenResult =>{
        //             if(idTokenResult.claims.admin){
        //                 console.log("true")
        //                 const key =  firebase.database().ref().child("users")
        // key.on("child_added", snap=>{
        //     var name = snap.child("personal/"+"userName").val()
        //     console.log(name)
        //     console.log(snap.val());
        // })

        //             }
        //         })
        //     }
    });
})();
