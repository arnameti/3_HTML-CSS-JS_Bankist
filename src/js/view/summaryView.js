const SummaryView = class {
  _parentElement = document.querySelector('[data-summary]');
  _data;

  render(data) {
    this._data = data;
    const markUp = this._generateMarkup();

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  _generateMarkup() {
    const totalIn = this._data.movements
      .filter(movement => movement > 0)
      .reduce((acc, prev) => {
        return acc + prev;
      }, 0)
      .toFixed(2);

    const totalOut = this._data.movements
      .filter(movement => movement < 0)
      .reduce((acc, prev) => {
        return acc + prev;
      }, 0)
      .toFixed(2);

    const interest = this._data.movements
      .filter(movement => movement > 0)
      .map(deposit => (deposit * this._data.interestRate) / 100)
      .filter(int => int >= 1)
      .reduce((acc, int) => acc + int, 0)
      .toFixed(2);

    return `
      <p class="summary__label">In</p>
      <p class="summary__value summary__value--in">${totalIn}Euro</p>
      <p class="summary__label">Out</p>
      <p class="summary__value summary__value--out">${totalOut * -1}Euro</p>
      <p class="summary__label">Interest</p>
      <p class="summary__value summary__value--interest">${interest}Euro</p>
      <button class="summary__btn">&darr; Sort</button>
    `;
  }
};

export default new SummaryView();
