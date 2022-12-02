const SortView = class {
  clickBtn(handler) {
    const sortBtn = document.querySelector('[data-summary-btn]');
    sortBtn?.addEventListener('click', function () {
      handler();
    });
  }
};

export default new SortView();
