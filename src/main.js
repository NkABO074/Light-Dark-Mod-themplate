const TOGGLE_SWITCH = document.querySelector("#switch");

/**
 * Switch our theme dynamicly
 */
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Event listener
TOGGLE_SWITCH.addEventListener("change", switchTheme);
