const faqContents = document.querySelectorAll('.faq-content');

faqContents.forEach(content => {
  const plusIcon = content.querySelector('.plus-icon');
  const minusIcon = content.querySelector('.minus-icon');
  const answer = content.querySelector('p');

  if (answer) {
    if (!plusIcon || !minusIcon) {
      console.error('Plus or minus icon not found for this FAQ item.');
      return;
    }

    else {
      plusIcon.addEventListener('click', () => {
      answer.classList.remove('is-hidden');
      answer.classList.add('is-visible');
      plusIcon.classList.remove('is-visible');
      plusIcon.classList.add('is-hidden');
      minusIcon.classList.remove('is-hidden');
      minusIcon.classList.add('is-visible');
    });

      plusIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          answer.classList.remove('is-hidden');
          answer.classList.add('is-visible');
          plusIcon.classList.remove('is-visible');
          plusIcon.classList.add('is-hidden');
          minusIcon.classList.remove('is-hidden');
          minusIcon.classList.add('is-visible');
        }
    });

      minusIcon.addEventListener('click', () => {
        answer.classList.remove('is-visible');
        answer.classList.add('is-hidden');
        plusIcon.classList.remove('is-hidden');
        plusIcon.classList.add('is-visible');
        minusIcon.classList.remove('is-visible');
        minusIcon.classList.add('is-hidden');
    });

      minusIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          answer.classList.remove('is-visible');
          answer.classList.add('is-hidden');
          plusIcon.classList.remove('is-hidden');
          plusIcon.classList.add('is-visible');
          minusIcon.classList.remove('is-visible');
          minusIcon.classList.add('is-hidden');
        }
    });
    }
  } 
  else {
    console.error('Answer not found for this FAQ item.');
  }
});