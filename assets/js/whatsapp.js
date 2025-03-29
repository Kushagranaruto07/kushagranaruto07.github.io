function sendToWhatsApp(event) {
    event.preventDefault();
    
    // Hide all messages first
    document.querySelectorAll('.alert-message').forEach(msg => {
      msg.style.display = 'none';
    });
    
    // Get form values
    const name = document.getElementById('name-field').value.trim();
    const email = document.getElementById('email-field').value.trim();
    const subject = document.getElementById('subject-field').value.trim();
    const message = document.getElementById('message-field').value.trim();
    
    // Validate all fields
    if (!name || !email || !subject || !message) {
      document.querySelector('.error-message').style.display = 'flex';
      return;
    }
    
    // Format WhatsApp message
    const whatsappMsg = `New Contact From Portfoilo:%0A Name: ${name}%0A Email: ${email}%0A Subject: ${subject}%0A Message: ${message}`;
    
    // Open WhatsApp
    const phoneNo = "9198949718005";
    window.open(`https://wa.me/${phoneNo}?text=${whatsappMsg}`, '_blank');
    
    // Show success message
    document.querySelector('.sent-message').style.display = 'flex';
    
    // Optional: Reset form
    event.target.reset();
  }