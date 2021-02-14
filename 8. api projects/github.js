class Github {
  constructor() {
    this.client_id = "2ca54a7063f6b506f39b";
    this.client_secret = "ba85d6c8490880f958e75f76c5a13581fa8c4ec4";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }

  async getRepos(user) {
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repos = await repoResponse.json();

    return {
      repos,
    };
  }
}
