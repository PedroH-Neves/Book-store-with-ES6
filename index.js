import {
  submit, displayContentContainer, listBtn, form, contactInfo, addBtn, contactBtn,
} from './modules/variables.js';
import { bookInput } from './modules/UI.js';
import { DateTime } from './modules/luxon.js';

submit.addEventListener('click', (event) => {
  event.preventDefault();
  bookInput.addAwesomeBook();
});

displayContentContainer.addEventListener('click', (event) => {
  bookInput.removeAwesomeBook(event);
});

listBtn.addEventListener('click', () => {
  displayContentContainer.style.display = 'block';
  form.style.display = 'none';
  contactInfo.style.display = 'none';
});
addBtn.addEventListener('click', () => {
  displayContentContainer.style.display = 'none';
  form.style.display = 'flex';
  contactInfo.style.display = 'none';
});
contactBtn.addEventListener('click', () => {
  displayContentContainer.style.display = 'none';
  form.style.display = 'none';
  contactInfo.style.display = 'flex';
});

const displayDate = () => {
  const date = document.querySelector('.date-text');
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }, 0);
};
displayDate();