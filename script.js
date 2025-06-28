const waitlistForm = document.getElementById('waitlistForm');
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('#nav');
const toast = document.getElementById('toast');
const closeBtn = document.querySelector('.toast-close');
let hideTimeout;

waitlistForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email) return;

  const formData = new FormData(waitlistForm);

  try {
    const response = await fetch(waitlistForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      clearTimeout(hideTimeout);
      toast.classList.remove('hidden');
      requestAnimationFrame(() => toast.classList.add('show'));
      hideTimeout = setTimeout(hideToast, 3000);
      waitlistForm.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  } catch (err) {
    alert('Network error. Please try again later.');
    console.error(err);
  }
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navBar.classList.toggle('active');
})

closeBtn.addEventListener('click', hideToast);

function hideToast() {
  toast.classList.remove('show');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 400); 
}
