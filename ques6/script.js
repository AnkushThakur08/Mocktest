const openModalBtn = document.getElementById('open-modal-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const body = document.body;

// Open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  body.classList.add('modal-open');
});

// Close the modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  }
});

// Close the modal when clicking the close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});
