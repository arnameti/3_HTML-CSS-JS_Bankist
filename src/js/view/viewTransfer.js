const TransferView = class {
  operationTranfer = document.querySelector('[data-operation="transfer"]');

  getInputs(handler) {
    this.operationTranfer.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputTransfer = document.querySelector('[data-transfer-input]');
      const inputNumber = document.querySelector('[data-transfer-number]');

      handler(inputTransfer.value, inputNumber.value);

      inputTransfer.value = '';
      inputNumber.value = '';

      inputTransfer.focus();
    });
  }
};

export default new TransferView();
