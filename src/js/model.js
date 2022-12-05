export const state = {
  accounts: [
    {
      owner: 'Jonas Schmedtmann',
      movements: [
        200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 500,
      ],
      interestRate: 1.2, // %
      pin: 1111,

      movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
      ],
      currency: 'EUR',
      locale: 'pt-PT', // de-DE
    },

    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,

      movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
      ],
      currency: 'USD',
      locale: 'en-US',
    },
  ],
};

const shortenName = name => {
  return name
    .split(' ')
    .map(name => name.slice(0, 1))
    .join('')
    .toLowerCase();
};

export const findAcc = (username, password) => {
  // find acc based on inputs and save it in the state
  state.currentAcc = state.accounts.find(
    acc => shortenName(acc.owner) === username && acc.pin === password
  );
};

export const checkUserInputs = (username, password) => {
  // prettier-ignore
  return shortenName(state.currentAcc.owner) === username && 
    state.currentAcc.pin === password
};

export const sortMovements = function () {
  state.currentAcc.sort = state.currentAcc.sort ? false : true;

  return state.currentAcc.sort
    ? state.currentAcc.movements.slice().sort((a, b) => b - a)
    : state.currentAcc.movements;
};

export const checkIfAccExists = function (username) {
  return state.accounts.some(acc => shortenName(acc.owner) === username);
};

// prettier-ignore
export const pushTransferAmountToMovements = function (username, amount) {
  const index = state.accounts.findIndex(acc => shortenName(acc.owner) === username);

  state.accounts[index].movements.push(amount);

  console.log(state.accounts[index]);
};
