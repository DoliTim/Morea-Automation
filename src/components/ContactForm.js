// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  const [formStatus, setFormStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Replace with your Make.com webhook URL
      const response = await fetch('YOUR_MAKE_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`
                inline-flex items-center px-6 py-3 border border-transparent rounded-full
                text-base font-medium text-white bg-purple-600 hover:bg-purple-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {formStatus === 'success' && (
            <div className="mt-4 text-center text-green-600">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mt-4 text-center text-red-600">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;