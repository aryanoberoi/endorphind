import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Rocket, Check } from 'lucide-react';

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

    return (
        <div className="font-inter">
            <footer className="bg-transparent text-gray-400 py-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[1px]">
                <div className="max-w-7xl mx-auto w-full overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 pb-4 border-b border-t border-gray-700">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start mb-2">
                                <div className='aspect-[16/9]'>
                                    <img
                                        src='FindAura..png'
                                        alt="Endorphind Logo Placeholder"
                                        className="w-24 h-24 md:w-48 md:h-48 lg:w-50 lg:h-50 rounded-md hidden md:block mt-14"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:items-end pt-8">
                            <div className="w-full max-w-sm mx-auto md:ml-auto md:mr-0 pl-0">
                                <h3 className="text-white text-lg font-semibold mb-4 text-left">Connect with Us</h3>
                                <form className="flex flex-col space-y-3 w-full p-5 rounded-lg shadow-lg items-start
                                    bg-gradient-to-br from-gray-950 to-black border border-gray-700">
                                    <input
                                        type="email"
                                        placeholder="Enter your email *"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`p-2 rounded-md bg-purple-950 text-white text-sm border ${emailError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                                        required
                                    />
                                    {emailError && <p className="text-red-400 text-xs text-left -mt-2">{emailError}</p>}

                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number *"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className={`p-2 rounded-md bg-purple-950 text-white text-sm border ${phoneError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                                        required
                                    />
                                    {phoneError && <p className="text-red-400 text-xs text-left -mt-2">{phoneError}</p>}

                                    <button
                                        type="button"
                                        onClick={handleButtonClick}
                                        disabled={!isFormValid || isSubmitted}
                                        className={`
                                            relative inline-flex h-12 w-full items-center justify-start border-2 border-blue-600 px-4 transition-all duration-500 rounded-md overflow-hidden
                                            ${isSubmitted ? 'bg-blue-600' : 'bg-gray-900'}
                                            ${!isFormValid || isSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}
                                        `}
                                    >
                                        <span
                                            className={`absolute top-1/2 -translate-y-1/2 p-2 transition-all duration-500 rounded-md
                                                ${isSubmitted
                                                    ? 'left-[calc(100%-2.5rem)] bg-white text-blue-600'
                                                    : 'left-2 bg-white text-blue-600'
                                                }
                                            `}
                                        >
                                            {isSubmitted ? <Check size={20} /> : <Rocket size={20} />}
                                        </span>

                                        <span
                                            className={`absolute left-1/2 -translate-x-1/2 font-semibold transition-all duration-500 ease-in-out text-white
                                                ${isSubmitted
                                                    ? 'opacity-0 translate-x-12'
                                                    : 'opacity-100'
                                                }
                                            `}
                                        >
                                            Submit
                                        </span>

                                        <span
                                            className={`absolute left-1/2 -translate-x-1/2 font-semibold transition-all duration-500 ease-in-out text-white
                                                ${isSubmitted
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 -translate-x-12'
                                                }
                                            `}
                                        >
                                            Done!
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-2 md:mb-0 font-serif">
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

                    <p className="text-gray-500 text-sm text-center mt-1">
                    Endorphind Solutions Pvt Ltd.
                    </p>
                    <p className="text-gray-500 text-sm text-center mt-1">
                        B190, Sector 31, Noida -301301
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
