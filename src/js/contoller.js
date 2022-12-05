import * as model from './model.js';
import logInView from './view/loginView.js';
import movementsView from './view/movementsView.js';
import summaryView from './view/summaryView.js';
import sortView from './view/sortView';
import viewTransfer from './view/viewTransfer';

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

const controlTransfer = function (inputTransfer, inputNumber) {
  console.log(inputTransfer, inputNumber);
};

const init = function () {
  logInView.getLoginInputs(controlLogIn);
  sortView.clickBtn(controlSort);
  viewTransfer.getInputs(controlTransfer);
};

init();
