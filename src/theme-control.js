export var setThemeControl = () => {
  var themeControls = document.querySelector('.theme-controls');
  var themeInputs = themeControls.querySelectorAll('.theme-controls input');

  var handleSwitchTheme = (e) => {
    var activeInput = e.target;
    var theme = activeInput.value;

    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    themeInputs.forEach((input) => {
      input.setAttribute('aria-checked', 'false');
    });

    activeInput.setAttribute('aria-checked', 'true');
  };

  var loadSavedTheme = () => {
    var theme = localStorage.getItem('theme');
    theme && document.documentElement.setAttribute('data-theme', theme);
  };

  loadSavedTheme();

  themeInputs.forEach((input) => input.addEventListener('click', handleSwitchTheme));
};
