import React from 'react';

const HelpPage: React.FC = () => {
  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "Go to Settings > Security and click on 'Change Password'. Enter your current password and then your new password twice to confirm."
    },
    {
      question: "How do I invite team members?",
      answer: "Navigate to the Team page and click the '+ Invite Member' button. Enter their email address and select their role."
    },
    {
      question: "Can I customize the dashboard?",
      answer: "Yes! You can customize widgets, rearrange sections, and choose which metrics to display in your dashboard settings."
    },
    {
      question: "How do I export my data?",
      answer: "Most pages have an 'Export' button. You can export data as CSV, PDF, or Excel formats depending on the section."
    },
    {
      question: "Is there a mobile app?",
      answer: "Currently, our application is web-based and responsive. A dedicated mobile app is planned for future release."
    }
  ];

  const contactOptions = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@company.com",
      icon: "📧"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 9 AM - 6 PM EST",
      icon: "💬"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      icon: "📞"
    }
  ];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Help & Support</h1>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Guide</h3>
            <p className="text-gray-600 text-sm">Complete documentation and tutorials</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 text-sm">Step-by-step video guides</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tips & Tricks</h3>
            <p className="text-gray-600 text-sm">Make the most of your experience</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqItems.map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Contact Support</h2>
            <p className="text-gray-600 mt-1">Can't find what you're looking for? Get in touch with our support team.</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{option.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <p className="text-black font-medium">{option.contact}</p>
                  <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    Contact
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500">
          <p>Need immediate assistance? Our support team is here to help!</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
