import * as model from './model.js';
import logInView from './view/loginView.js';
import movementsView from './view/movementsView.js';
import summaryView from './view/summaryView.js';

const controlLogIn = function (username, password) {
  model.findAcc(username, password);

  const { currentAcc } = model.state;

  if (model.state.currentAcc.isTrue) {
    logInView.showApp();
    movementsView.render(currentAcc.movements);
    summaryView.render(currentAcc);
  }
};

const init = function () {
  logInView.getLoginInputs(controlLogIn);
};

init();
