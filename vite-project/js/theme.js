function theming() {
  const body = document.body;
  if (body.classList.contains("light-theme")) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
  }
}

export { theming };
