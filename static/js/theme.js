(function(){
  function applyTheme(dark){
    if(dark){
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', dark ? '1' : '0');
  }
  var stored = localStorage.getItem('darkMode');
  var dark = stored === '1';
  applyTheme(dark);
  window.toggleDarkMode = function(){
    dark = !dark;
    applyTheme(dark);
  };
})();
