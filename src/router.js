import Navigo from "navigo"

const router = new Navigo('/');
router.on("/", function () {
  document.title = "呆呆游研社";
  fetch("/src/pages/home.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("app").innerHTML = data;
      router.updatePageLinks()
    });
});

router.on("/projects", function () {
  document.title = "项目";
  fetch("/src/pages/projects.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("app").innerHTML = data;
    });
});

router.resolve()
window.router = router