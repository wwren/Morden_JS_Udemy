// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector("#searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        // show alert
        ui.showAlert(`User ${userText} doesn't exist`, "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        github.getRepos(userText).then((data) => {
          const repos = data.repos;
          if (Array.isArray(repos) && repos.length) {
            ui.showLatestedRepo(repos);
          } else if (repos.length == 0) {
            ui.showNoRepos(userText);
          }
        });
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
