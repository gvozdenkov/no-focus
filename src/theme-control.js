export var setThemeControl = () => {
  var themeControls = document.querySelector('.theme-controls');
  var themeInputs = themeControls.querySelectorAll('.theme-controls input');

  var uncheckAllInputs = (inputs) =>
    inputs.forEach((input) => {
      input.setAttribute('aria-checked', 'false');
    });

  var setInputChecked = (input) => input.setAttribute('aria-checked', 'true');

  var findInputByValue = (inputs, value) => [...inputs].find((input) => input.value === value);

  var setDocumentTheme = (theme) => document.documentElement.setAttribute('data-theme', theme);

  var handleSwitchTheme = (e) => {
    var activeInput = e.target;
    var theme = activeInput.value;

    localStorage.setItem('theme', theme);
    setDocumentTheme(theme);
    uncheckAllInputs(themeInputs);
    setInputChecked(activeInput);
  };

  var loadSavedTheme = () => {
    var theme = localStorage.getItem('theme');
    if (theme) {
      setDocumentTheme(theme);
      uncheckAllInputs(themeInputs);
      var activeInput = findInputByValue(themeInputs, theme);
      setInputChecked(activeInput);
    } else {
      var activeInput = findInputByValue(themeInputs, 'auto');
      setInputChecked(activeInput);
    }
  };

  loadSavedTheme();

  themeInputs.forEach((input) => input.addEventListener('click', handleSwitchTheme));
};
