const LogInView = class {
  _app = document.querySelector('[data-app-visibility]');
  _formLogInEl = document.querySelector('[data-form-login]');

  username;
  password;

  getLoginInputs(handler) {
    this._formLogInEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const userNameInputEl = document.querySelector('[data-login="username"]');
      const passwordInputEl = document.querySelector('[data-login="password"]');
      this.username = userNameInputEl.value;
      this.password = +passwordInputEl.value;

      console.log('View: ', this.username, this.password);
      console.log('View: ', typeof this.password);
      handler(this.username, this.password);

      userNameInputEl.textContent = '';
      passwordInputEl.textContent = '';
    });
  }

  showApp() {
    if (this._app.dataset.appVisibility === 'hidden') {
      this._app.dataset.appVisibility = 'visible';
    }
  }
};

export default new LogInView();
