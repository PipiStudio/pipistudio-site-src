import Navigo from "navigo"

const router = new Navigo('/');

router.on("/", function () {
  document.title = "呆呆游研社";
  fetch("/pages/home.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("app").innerHTML = data;
    });
});

router.on("/projects", function () {
  document.title = "项目";
  fetch("/pages/projects.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("app").innerHTML = data;
    });
});

router.resolve()