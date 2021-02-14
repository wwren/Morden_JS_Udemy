class Github {
  constructor() {
    this.client_id = "**";
    this.client_secret = "**";
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
