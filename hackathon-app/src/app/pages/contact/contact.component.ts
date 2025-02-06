import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isSubmitting: boolean = false;

  // Initialize form data with the exact field names from EmailJS template
  formData: ContactForm = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    email: 'priyadarshinip658@gmail.com',
    github: 'https://github.com/bestorbust/',
    linkedin: 'https://www.linkedin.com/in/priya-darshini-p-btech27/',
    location: 'Bangalore, India'
  };

  ngOnInit(): void {
    emailjs.init('grDy5n_7DUDnLtwIY');
  }

  async sendEmail(form: NgForm): Promise<void> {
    if (!form.valid) {
      console.log('Form is invalid');
      return;
    }

    this.isSubmitting = true;

    try {
      const response = await emailjs.send(
        'service_av9hwos',
        'template_yhzn6wu',
        {
          from_name: this.formData.from_name,
          from_email: this.formData.from_email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_name: 'Priyadarshini',
          reply_to: this.formData.from_email
        },
        'grDy5n_7DUDnLtwIY'
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      this.resetForm(form);
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again or use direct email.');
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.formData = {
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    };
  }

  openEmailClient(): void {
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(`Name: ${this.formData.from_name}\nEmail: ${this.formData.from_email}\n\nMessage:\n${this.formData.message}`)}`;
    window.location.href = mailtoLink;
  }
}
