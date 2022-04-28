const searchUser = document.getElementById("searchUser");
const github = new GitHub;
const ui = new UI;
const submit = document.getElementById("submit");
ui.clearProfile();
submit.addEventListener('click', (e) => {
    // console.log(searchUser);

    if(searchUser !== ''){
        // console.log(searchUser.value);
        github.getUser(searchUser.value)
        .then(data => {
            if(data.profile.message === "Not Found"){
                //show Alert
                ui.clearProfile();

                ui.showAlert("User not found", "alert alert-danger")
                // ui.clearProfile();


            }
            else{

                //Show profile 
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.showFollowers(data.followers);
                ui.showFollowing(data.following);
            }
        })

    }
   
    e.preventDefault();
})


