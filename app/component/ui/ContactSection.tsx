import React from 'react';

interface ContactSectionProps {
    theme: 'light' | 'dark';
}

const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
    
    return (
        <section id="contact" className="section-padding border-t border-[#30363d]">
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="max-w-2xl mx-auto card p-8 rounded-xl shadow-2xl">
                <p className="text-gray-400 text-center mb-6">Have a project in mind or just want to chat? Send me a message!</p>
                <form onSubmit={(e) => { e.preventDefault(); console.log('Mock Form Submit'); }}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" required
                            className={`w-full px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-[#0d1117] border-[#30363d] text-white'} focus:ring-indigo-500 focus:border-indigo-500 transition duration-300`}
                            placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                            className={`w-full px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-[#0d1117] border-[#30363d] text-white'} focus:ring-indigo-500 focus:border-indigo-500 transition duration-300`}
                            placeholder="your.email@example.com" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea id="message" name="message" rows={4} required
                            className={`w-full px-4 py-2 rounded-lg ${theme === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-[#0d1117] border-[#30363d] text-white'} focus:ring-indigo-500 focus:border-indigo-500 transition duration-300`}
                            placeholder="What would you like to discuss?"></textarea>
                    </div>
                    <button type="submit" className="interactable w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]">
                        Send Message
                    </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-[#30363d] text-center">
                    <p className="text-gray-400 mb-4">Or connect with me directly:</p>
                    <p className={`text-lg  ${theme === 'light' ? 'text-gray-600' : 'text-white'} font-medium`}>adnanq262@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;