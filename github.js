class GitHub{
    constructor(){
        this.client_id = 'c8b107157db64a499986';
        this.client_secret = '448409ce83352e2e4585c436582f16bb6f430793';
        this.repos_count = 5;
        this.repos_sort = "created: asc";
        this.follow_sort ="created&direction:desc"
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const followersResponse = await fetch(`https://api.github.com/users/${user}/followers?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const followingResponse = await fetch(`https://api.github.com/users/${user}/following?&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repos_data = await repoResponse.json();
        const followers_data = await followersResponse.json();
        const following_data = await followingResponse.json();

        return {
            profile:profileData,
            repos:repos_data,
            followers: followers_data,
            following: following_data
        };

     
    }
}

