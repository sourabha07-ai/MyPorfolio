export function initializeContactForm() {
  const form = document.querySelector('[data-form]');
  const button = document.querySelector('[data-form-btn]');
  const status = document.querySelector('[data-form-status]');
  if (!form || !button) return;

  const updateButton = () => { button.disabled = !form.checkValidity(); };
  form.querySelectorAll('[data-form-input]').forEach((input) => {
    input.addEventListener('input', updateButton);
    input.addEventListener('change', updateButton);
  });
  updateButton();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const recipient = form.dataset.recipient;
    if (!recipient) {
      if (status) status.textContent = 'Contact email is not configured yet.';
      return;
    }

    const data = new FormData(form);
    const subject = `Portfolio message from ${data.get('fullname')}`;
    const body = `${data.get('message')}\n\nReply to: ${data.get('email')}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = 'Your email app should open with the message ready to send.';
  });
}
