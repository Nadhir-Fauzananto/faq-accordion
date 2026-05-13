const faqContents = document.querySelectorAll('.faq-content');

faqContents.forEach(content => {
  const plusIcon = content.querySelector('.plus-icon');
  const minusIcon = content.querySelector('.minus-icon');
  const answer = content.querySelector('p');

  if (answer) {
        if (plusIcon) {
            plusIcon.addEventListener('click', () => {
                if(minusIcon) {
                    answer.classList.add('is-visible');
                    answer.classList.remove('is-hidden');
                    plusIcon.classList.add('is-hidden');
                    minusIcon.classList.remove('is-hidden');
                }
                else {
                    console.error("Minus icon not found.");
                }
        });
            plusIcon.addEventListener('keydown', (event) => {
                if(minusIcon) {
                    if(event.key === 'Enter' || event.code === 'Space' || event.key === ' ') {
                        answer.classList.add('is-visible');
                        answer.classList.remove('is-hidden');
                        plusIcon.classList.add('is-hidden');
                        minusIcon.classList.remove('is-hidden');
                    }
                }
                else {
                    console.error("Minus icon not found.");
                }
        });
    }
     else {
        console.error("Plus icon not found.");
     }

    if (minusIcon) {
        if (plusIcon) {
                minusIcon.addEventListener('click', () => {
                answer.classList.remove('is-visible');
                answer.classList.add('is-hidden');
                plusIcon.classList.remove('is-hidden');
                minusIcon.classList.add('is-hidden');  
            });
        }
        else {
            console.error("Plus icon not found.");
        }
            minusIcon.addEventListener('keydown', (event) => {
                if (plusIcon) {
                    if(event.key === 'Enter' || event.code === 'Space' || event.key === ' ') {
                        answer.classList.remove('is-visible');
                        answer.classList.add('is-hidden');
                        plusIcon.classList.remove('is-hidden');
                        minusIcon.classList.add('is-hidden');
                    }
                }
                else {
                    console.error("Plus icon not found.");
                }
        });
    }
    else {
        console.error("Minus icon not found.");
    }
  }
  
    else {
        console.error("Answer not found.");
}
  
});