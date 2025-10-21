
// Start of Selection
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Rocket, Check } from 'lucide-react';
import WebFont from 'webfontloader';
// import PixelCard from '../PixelCard';
import ConnectButtonAndForm from './Connect';

const App = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleButtonClick = (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPhoneError('');

        let valid = true;
        if (!email) {
            setEmailError('Email is required');
            valid = false;
        }
        if (!phone) {
            setPhoneError('Phone number is required');
            valid = false;
        }

        if (!valid) {
            return;
        }

        setIsSubmitted(true);

        setTimeout(() => {
            console.log('Form submission simulated. Values:', { email, phone });
            setEmail('');
            setPhone('');
            setIsSubmitted(false);
        }, 1500);
    };

    const isFormValid = email && phone;

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Outfit:00,900']
          },
          custom: {
            families: ['Robit'], // The font-family name from your @font-face rule
            urls: ['./index.css'] // Path to your CSS file containing the @font-face rule
          },
        });
      }, []);

    return (
        <div className="font-robit">
            <footer className="bg-transparent text-gray-400 py-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[1px]">
                <div className="max-w-7xl mx-auto w-full overflow-hidden">
                    <ConnectButtonAndForm />
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4" style={{ fontFamily: 'Robit' }}>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-2 md:mb-0" style={{ fontFamily: 'Robit' }}>
                            <a href="/legal/privacy.html" className="transform scale-100 hover:scale-90 transition duration-300">Privacy Policy</a>
                            <a href="/legal/terms.html" className="transform scale-100 hover:scale-90 transition duration-300">Terms & Conditions</a>
                            <a href="/legal/refund.html" className="transform scale-100 hover:scale-90 transition duration-300">Refund Policy</a>
                        </div>

                        <div className="flex items-center space-x-3">
                            <a href="https://www.instagram.com/endorphind_?utm_source=ig_web_button_share_sheet&igsh=dWR5bXJ0MmxkeXl0" className="text-gray-500 transform scale-100 hover:scale-90 transition duration-300">
                                <Instagram size={20} />
                            </a>

                            <a href="https://www.linkedin.com/company/endorphind/" className="text-gray-500 transform scale-100 hover:scale-90 transition duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm text-center mt-1" style={{ fontFamily: 'Robit' }}>
                    Endorphind Solutions Pvt Ltd.
                    </p>
                    <p className="text-gray-500 text-sm text-center mt-1" style={{ fontFamily: 'Robit' }}>
                        B190, Sector 31, Noida -301301
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
