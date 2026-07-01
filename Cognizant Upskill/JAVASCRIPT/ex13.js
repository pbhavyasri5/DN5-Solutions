// Q13
document.getElementById('regForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submission step 1: preventDefault');
  const formData = new FormData(e.target);
  console.log('Form data:', Object.fromEntries(formData));
  debugger; // set breakpoint here, inspect variables
  fetch('/mock-api', { method: 'POST', body: formData })
    .then(res => res.json())
    .then(data => console.log('Fetch payload:', data))
    .catch(err => console.error('Fetch error:', err));
  console.log('Form submission step completed');
});