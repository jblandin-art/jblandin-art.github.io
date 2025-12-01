document.querySelectorAll('.read-more').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.service-card');
    const fullDesc = card.querySelector('.full-desc');

    if (fullDesc.hasAttribute('hidden')) {
      fullDesc.removeAttribute('hidden');
      btn.textContent = 'Show Less';
    } else {
      fullDesc.setAttribute('hidden', '');
      btn.textContent = 'Read More';
    }
  });
});
