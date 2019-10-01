class Github {
    constructor(){
        this.client_id = '28b2f13b9f36917dd818';
        this.client_secret ='d99700426c620e6e7aff01281e948cfa7d9cfe13';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id= ${this.client_id}& client_secret= ${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page= ${this.repos_count}&sort= ${this.repos_sort}&client_id= ${this.client_id}& client_secret= ${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}