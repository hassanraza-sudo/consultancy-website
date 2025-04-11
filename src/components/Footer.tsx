import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-midnight-blue text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Studienhilfe</h2>
          <p>
            Your trusted partner for global education, scholarships, and visa
            support.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>Email: info@goabroad.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>WhatsApp: +92 300 1234567</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/goabroad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/goabroad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/goabroad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@goabroad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Studienhilfe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
