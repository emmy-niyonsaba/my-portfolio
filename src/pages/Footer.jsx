import { useState } from 'react';

const Footer = () => {

  // State for form inputs and feedback messages
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Contact details for email and WhatsApp integration .
  const MY_EMAIL = "emmanuelniyonsaba40@gmail.com";
  const MY_PHONE = "250790231509"; 

  // This is your chosen professional default message
  const DEFAULT_WHATSAPP_MSG = "Hello Emmanuel, I saw your portfolio and would like to discuss a potential project. Are you available?";

  const handleEmailClick = () => {
    // For Email, we still require them to type something so the email isn't blank
    if (!message.trim()) {
      setError('Please add a message first');
      return;
    }
    setError('');
    const emailBody = encodeURIComponent(message);
    window.location.href = `mailto:${MY_EMAIL}?subject=Project Inquiry&body=${emailBody}`;
    triggerSuccess();
  };

  const handleWhatsAppClick = () => {
    setError('');
    
    // If message is empty, use the professional default. Otherwise, use what they typed.
    const textToSend = message.trim() ? message : DEFAULT_WHATSAPP_MSG;
    const encodedMessage = encodeURIComponent(textToSend);
    
    window.open(`https://wa.me/${MY_PHONE}?text=${encodedMessage}`, '_blank');
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSubmitted(true);
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-blue-950 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400">Emmanuel Niyonsaba</h1>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Building modern web applications and providing reliable network
            maintenance services in Kigali.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-blue-800 pb-2 inline-block">Navigation</h2>
          <ul className="space-y-2">
            <li><a href="/projects" className="hover:text-blue-400 transition">View My Projects</a></li>
            <li><a href="/resume" className="hover:text-blue-400 transition">Download Resume</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact Info</a></li>
          </ul>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-blue-800 pb-2 inline-block">Quick Message</h2>
          
          <div className="mt-2">
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError('');
              }}
              placeholder="Type here or just click WhatsApp for a quick hello..."
              className="w-full px-3 py-2 bg-blue-900/50 text-white rounded border border-blue-700 focus:outline-none focus:border-blue-400 transition resize-none"
              rows="3"
            />
            {error && <p className="mt-1 text-xs text-red-400">⚠️ {error}</p>}
            {submitted && <p className="mt-1 text-xs text-green-400">✅ Opening chat...</p>}
          </div>
          
          <div className="flex flex-col gap-3 mt-4">
            <button 
              onClick={handleWhatsAppClick}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quick Chat on WhatsApp
            </button>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6 text-sm">
        © {new Date().getFullYear()} Emmanuel Niyonsaba — Kigali, Rwanda
      </div>
    </footer>
  );
};

export default Footer;