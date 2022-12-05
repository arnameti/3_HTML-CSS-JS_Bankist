const TransferView = class {
  operationTranfer = document.querySelector('[data-operation="transfer"]');

  getInputs(handler) {
    this.operationTranfer.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputTransferUser = document.querySelector(
        '[data-transfer="username"]'
      );
      const inputTransferAmaount = document.querySelector(
        '[data-transfer="amount"]'
      );

      handler(inputTransferUser.value, inputTransferAmaount.value);

      inputTransferUser.value = '';
      inputTransferAmaount.value = '';

      inputTransferUser.focus();
    });
  }
};

export default new TransferView();
