const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Studien-Route, we value your privacy and are committed to protecting
        your personal data. This Privacy Policy explains how we collect, use,
        and safeguard your information when you visit our website
        <a href="https://www.studien-route.com" className="text-blue-500">
          studien-route.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal details like name, email, and phone number when you contact
          us.
        </li>
        <li>
          Technical data such as IP address, browser type, and pages visited.
        </li>
        <li>
          Cookies and tracking technologies for website performance and
          analytics.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide consultancy services and respond to inquiries.</li>
        <li>To improve our website, content, and user experience.</li>
        <li>
          To send relevant information about our services (if you opt-in).
        </li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services such as Google Analytics, social media
        platforms, and email providers. These services may collect data in
        accordance with their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience and monitor website
        performance. You can manage cookie preferences in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access, correct, or request deletion of your personal data.</li>
        <li>Withdraw consent for data processing at any time.</li>
        <li>Opt-out of marketing communications.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or how we handle
        your data, please contact us:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: info@studien-route.com</li>
        <li>Phone: +49 1575 5661506</li>
        <li>Address: Berlin, Germany</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
