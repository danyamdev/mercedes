const btnsTab = document.querySelectorAll('[data-tabs-handler]');
const fields = document.querySelectorAll('[data-tabs-field]');

btnsTab.forEach(btn => {
  btn.addEventListener('click', () => {

    btnsTabs.forEach(item => item.classList.remove('design-list__item_active'));
    btn.classList.add('design-list__item_active');

    const attr = btn.dataset.tabsHandler;

    fields.forEach(field => {
      if (attr == field.dataset.tabsField) field.classList.remove('hidden');
      else field.classList.add('hidden')
    });
  });
});