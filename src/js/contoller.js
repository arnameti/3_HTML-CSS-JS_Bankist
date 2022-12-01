import * as model from './model.js';
import logInView from './view/loginView.js';
import movementsView from './view/movementsView.js';

const controlLogIn = function (username, password) {
  model.findAcc(username, password);

  if (model.state.currentAcc.isTrue) {
    logInView.showApp();
    movementsView.render(model.state.currentAcc.movements);
  }
};

const init = function () {
  logInView.getLoginInputs(controlLogIn);
};

init();
