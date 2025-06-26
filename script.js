const waitlistForm = document.getElementById('waitlistForm');
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('#nav');
const toast = document.getElementById('toast');
const closeBtn = document.querySelector('.toast-close');
let hideTimeout;

waitlistForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(email) {
    //alert('Thank you for joining the waitlist!');
    clearTimeout(hideTimeout);
    toast.classList.remove('hidden');

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    hideTimeout = setTimeout(() => {
      hideToast();
    }, 3000);
    document.getElementById('waitlistForm').reset();
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
