const faqContents = document.querySelectorAll('.faq-content');

faqContents.forEach(content => {
  const plusIcon = content.querySelector('.plus-icon');
  const minusIcon = content.querySelector('.minus-icon');
  const answer = content.querySelector('p');

  if (answer) {
        if (plusIcon) {
            plusIcon.addEventListener('click', () => {
            answer.classList.add('is-visible');
            answer.classList.remove('is-hidden');
            plusIcon.classList.add('is-hidden');
            minusIcon.classList.remove('is-hidden');
        });

            plusIcon.addEventListener('keydown', (event) => {
                if(event.code === 'Enter' || event.code === 'Space') {
                    answer.classList.add('is-visible');
                    answer.classList.remove('is-hidden');
                    plusIcon.classList.add('is-hidden');
                    minusIcon.classList.remove('is-hidden');
                }
        });
    }

    if (minusIcon) {
            minusIcon.addEventListener('click', () => {
            answer.classList.remove('is-visible');
            answer.classList.add('is-hidden');
            plusIcon.classList.remove('is-hidden');
            minusIcon.classList.add('is-hidden');
        });

            minusIcon.addEventListener('keydown', (event) => {
                if(event.code === 'Enter' || event.code === 'Space') {
                    answer.classList.remove('is-visible');
                    answer.classList.add('is-hidden');
                    plusIcon.classList.remove('is-hidden');
                    minusIcon.classList.add('is-hidden');
                }
        });
    }
  }
    else {
        console.error("Answer not found.");
}
  
});