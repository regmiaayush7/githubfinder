class Github{
  constructor(){
    this.client_id = '535921a43e34b74d4c0c';
    this.client_secret = '21325e72c64cc053b20c15546714695563b1079f';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}