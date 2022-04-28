class UI{
    constructor() {
        this.profile = document.getElementById("profile");

    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb3">
            <div class="row">
                <div class="col-md-3">
                   
                    <a href="${user.html_url}" target = "_blank" class="btn btn-primary btn-block mb-4"> 
                        View Github profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class = "badge badge-primary"> Public Repos: ${user.public_repos}</span>
                    <span class = "badge badge-secondary"> Public Gists: ${user.public_gists}</span>
                    <span class = "badge badge-success"> Followers: ${user.followers}</span>
                    <span class = "badge badge-info"> Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item"> He is on Github since: ${user.created_at}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">Location: ${user.location}</li>

                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        <h3 class="page-heading mb-3">His followers</h3>
        <div id="followers"></div>
        <h3 class="page-heading mb-3">He is following:</h3>
        <div id="following"></div>


        `

    }
    clearProfile(){
        this.profile.innerHTML = '';

    }
    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");
        container.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert()
        }, 3000);

    }
    clearAlert(){
        const currentAllert =document.querySelector(".alert");
        if(currentAllert){
            currentAllert.remove();
        }
    }
    showRepos(repos){
        // console.log(repos)
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <br>
                        <div class="col-md-8">
                            <span class="badge badge-warning">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>

                        </div>

                  


                    </div>
                </div>
            `
            document.getElementById("repos").innerHTML = output;

        });
    }
    showFollowers(follows){
        let output = "";
        follows.forEach(folowee => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${folowee.html_url}" target="_blank">${folowee.login}</a>
                </div>
                <div class="col-md-8">
                     <span>Look at ${folowee.login}'s <a href="${folowee.repos_url}" target = "_blank">repos</a> </span>
                </div>
                

            </div>
        </div>
            
        `
            document.getElementById("followers").innerHTML = output;
        });
   
    }
    showFollowing(following){
        let output = "";
        following.forEach(folowing => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${folowing.html_url}" target="_blank">${folowing.login}</a>
                </div>
                <div class="col-md-8">
                     <span>Look at ${folowing.login}'s <a href="${folowing.repos_url}" target = "_blank">repos</a> </span>
                </div>
                

            </div>
        </div>
            
        `
            document.getElementById("following").innerHTML = output;
        });    }
}