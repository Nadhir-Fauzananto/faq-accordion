const faqContents = document.querySelectorAll('.faq-content');

faqContents.forEach(content => {
  const plusIcon = content.querySelector('.plus-icon');
  const minusIcon = content.querySelector('.minus-icon');
  const answer = content.querySelector('p');

  plusIcon.addEventListener('click', () => {
    answer.style.display = 'block';
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  });

  minusIcon.addEventListener('click', () => {
    answer.style.display = 'none';
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  });
});