import * as model from './model.js';
import logInView from './view/loginView.js';
import movementsView from './view/movementsView.js';
import summaryView from './view/summaryView.js';
import sortView from './view/sortView';

const controlLogIn = function (username, password) {
  model.findAcc(username, password);

  const { currentAcc } = model.state;

  if (model.checkUserInputs) {
    logInView.showApp();
    movementsView.render(currentAcc.movements);
    summaryView.render(currentAcc);
  }
};

const controlSort = function () {
  movementsView.render(model.sortMovements());
};

const init = function () {
  logInView.getLoginInputs(controlLogIn);
  sortView.clickBtn(controlSort);
};

init();
