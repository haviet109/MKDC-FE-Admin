function calculatorContent() {
  const headerElement = document.querySelector('.app-header');
  const pageHeaderElement = document.querySelector('.js-mkdc-content-header');
  const pageContent = document.querySelector('.app-content');

  const headerHeight = headerElement ? headerElement.clientHeight : 0;
  const pageHeaderHeight = pageHeaderElement ? pageHeaderElement.clientHeight : 0;

  if (pageContent) {
    pageContent.setAttribute('style', '--header-height: ' + headerHeight + 'px; --content-header-height: ' + pageHeaderHeight + 'px');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  calculatorContent();
});
