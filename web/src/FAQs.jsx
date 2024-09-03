// FAQs.jsx

import React from 'react';
import './faqs.css'; // Import a CSS file for styling (create this file)

const FAQs = () => (
  <div className="faqs-container">
    <h2>Frequently Asked Questions (FAQs)</h2>

    <div className="faq-item">
      <div className="faq-question">Q: How can I place an order?</div>
      <div className="faq-answer">A: Placing an order is easy! Simply navigate to our Cupcakes page, select your desired cupcakes, and proceed to the checkout.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: Do you offer delivery?</div>
      <div className="faq-answer">A: Yes, we provide cupcake delivery services. You can choose the delivery option during the checkout process.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: What payment methods do you accept?</div>
      <div className="faq-answer">A: We accept major credit cards, including Visa, MasterCard, and American Express.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: Can I customize my cupcakes?</div>
      <div className="faq-answer">A: Absolutely! We offer customization options for our cupcakes. Contact our support team for more details.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: Is there a minimum order for delivery?</div>
      <div className="faq-answer">A: Yes, we have a minimum order requirement for delivery. Please check our delivery policy for more information.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: What is your cancellation policy?</div>
      <div className="faq-answer">A: Cancellation policies may vary depending on the order type. Please refer to our cancellation policy for specific details.</div>
    </div>

    <div className="faq-item">
      <div className="faq-question">Q: Can I request a specific delivery time?</div>
      <div className="faq-answer">A: While we cannot guarantee specific delivery times, you can mention your preferred time in the order notes, and we will do our best to accommodate it.</div>
    </div>

    {/* Add more FAQ items as needed with the same structure */}
  </div>
);

export default FAQs;
