const TOGGLE_SWITCH = document.querySelector("#switch");
const NAV = document.getElementById("nav");
const TOGGLE_ICON = document.getElementById("toggle_icon");
const IMAGE_1 = document.getElementById("image_1");
const IMAGE_2 = document.getElementById("image_2");
const IMAGE_3 = document.getElementById("image_3");
const TEXT_BOX = document.getElementById("text_box");

/**
 * Color of the images
 * @param {String} color Color of the image
 */
function imageColor(color) {
  IMAGE_1.src = `img/undraw_conceptual_idea_${color}.svg`;
  IMAGE_2.src = `img/undraw_feeling_proud_${color}.svg`;
  IMAGE_3.src = `img/undraw_proud_coder_${color}.svg`;
}

/**
 * Generalized style and color for light & dark mode
 * @param {String} nav_bg_color nav bar background color
 * @param {String} txt_bg_color text box background color
 * @param {String} ico_txt_content a text that fit the theme
 * @param {String} ico_class_remove the CSS class to remove
 * @param {String} ico_class_add the CSS to add
 */
function styleColor(
  nav_bg_color,
  txt_bg_color,
  ico_txt_content,
  ico_class_remove,
  ico_class_add
) {
  NAV.style.backgroundColor = nav_bg_color;
  TEXT_BOX.style.backgroundColor = txt_bg_color;
  TEXT_BOX.style.color = "#fff";
  TOGGLE_ICON.children[0].textContent = ico_txt_content;
  TOGGLE_ICON.children[1].classList.replace(ico_class_remove, ico_class_add);
}

/**
 * Light/Dark mode
 * @param {Boolean} is_dark responsable for the dark mode activation
 */
function webSiteMode(is_dark) {
  if (is_dark) {
    // Dark mode style
    styleColor(
      "rgb(0 0 0 / 50%)",
      "rgb(255 255 255 / 20%)",
      "Dark mode",
      "fa-sun",
      "fa-moon"
    );
    // dark images
    imageColor("dark");
  } else {
    // light mode style
    styleColor(
      "rgb(255 255 255 / 50%)",
      "rgb(0 0 0 / 50%)",
      "Light mode",
      "fa-moon",
      "fa-sun"
    );
    // light images
    imageColor("light");
  }
}

/**
 * Switch our theme dynamicly
 * @param {Event} event a DOM event
 */
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    webSiteMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    webSiteMode(false);
  }
}

// Event listener
TOGGLE_SWITCH.addEventListener("change", switchTheme);
