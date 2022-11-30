import * as model from './model.js';
import LogInView from './view/loginView.js';

const controlLogIn = function (username, password) {
  console.log('controller: ', username, password);
  console.log('controller: ', typeof password);
  console.log('controller: ', model.checkUserInputs(username, password));

  if (model.checkUserInputs(username, password)) LogInView.showApp();
};

const init = function () {
  LogInView.getLoginInputs(controlLogIn);
};

init();
