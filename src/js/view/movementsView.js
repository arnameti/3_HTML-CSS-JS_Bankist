const MovementsView = class {
  _parentElement = document.querySelector('[data-movements]');
  _data;

  render(data) {
    this._data = data;
    const markUp = this._generateMarkup();

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  _generateMarkup() {
    return this._data
      .map((movement, index) => {
        // prettier-ignore
        return `
      <div class="movements__row">
        <div class="movements__type" data-movement-type = ${movement > 0 ? 'widhdrawal' : 'deposit'}> 
        ${index + 1} ${movement > 0 ? 'withdrawal' : 'deposit'}
        </div>
        <div class="movements__value">${movement} Euro</div>
      </div> 
      `;
      })
      .join('');
  }
};

export default new MovementsView();
