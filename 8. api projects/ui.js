class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-info mb-2">Followers: ${user.followers}</span>
          <span class="badge badge-info mb-2">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Blog: ${user.blog} </li>
            <li class="list-group-item">Location: ${user.location} </li>
            <li class="list-group-item">Member Since: ${user.created_at} </li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repo </h3>
    <div id="repos"></div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, style) {
    this.clearAlert();

    const div = document.createElement("div");

    div.className = style;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showLatestedRepo(repos) {
    repos.sort((a, b) => {
      if (a.updated_at < b.updated_at) {
        return 1;
      } else if (a.updated_at > b.updated_at) {
        return -1;
      }
      return 0;
    });

    const repoContainer = document.getElementById("repos");

    repoContainer.innerHTML = `
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"> Created at </th>
            <th scope="col"> Updated at </th>
            <th scope="col"> Project Name </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;
    const tableBody = document.querySelector("tbody");

    repos.forEach((repo) => {
      tableBody.innerHTML += `
      <td>${repo.created_at}</td>
      <td>${repo.updated_at}</td>
      <td>${repo.name}</td>
      `;
    });
  }

  showNoRepos(userText) {
    const repoContainer = document.getElementById("repos");

    repoContainer.appendChild(document.createTextNode(`${userText} has no repository to show.`)); 
  }
}
