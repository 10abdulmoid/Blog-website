const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  hero.style.setProperty('--mouse-x', `${x}%`);
  hero.style.setProperty('--mouse-y', `${y}%`);
});

hero.addEventListener('mouseleave', () => {
  hero.style.setProperty('--mouse-x', `50%`);
  hero.style.setProperty('--mouse-y', `50%`);
});
