import React, { useState, useCallback } from 'react';
import { Rocket, Check, X, MessageSquare } from 'lucide-react';
import StarBorder from '../StarBorder';

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY; 
const CONTACT_LIST_IDS = [5]; 

const ConnectButtonAndForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [apiError, setApiError] = useState('');

    const toggleForm = () => {
        setIsFormOpen(prev => !prev);
        // Reset form state when closing
        if (isFormOpen) {
            setEmail('');
            setPhone('');
            setMessage('');
            setIsSubmitted(false);
            setEmailError('');
            setPhoneError('');
            setApiError('');
        }
    };

    const handleButtonClick = useCallback(async (e) => {
        e.preventDefault();

        setEmailError('');
        setPhoneError('');
        setApiError('');

        let valid = true;
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }
        if (!phone || phone.length < 5) {
            setPhoneError('Please enter a valid phone number.');
            valid = false;
        }
        if (!valid) return;

        setIsSubmitted(true);

        // Try to send contact data to Brevo
        try {
            // You can adjust FIRSTNAME logic to split from email/user input if desired
            const res = await fetch(BREVO_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': BREVO_API_KEY
                },
                body: JSON.stringify({
                    email: email,
                    attributes: {
                        PHONE: phone,
                        MESSAGE: message
                    },
                    listIds: CONTACT_LIST_IDS
                })
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Failed to add contact.');
            }
            // Optionally: show or log response
            console.log('Brevo response:', data);

            // Show success and close form after delay
            setTimeout(() => {
                setEmail('');
                setPhone('');
                setMessage('');
                setIsSubmitted(false);
                setIsFormOpen(false);
            }, 1500);
        } catch (err) {
            setIsSubmitted(false);
            setApiError(
                'There was an error submitting your request. Please try again later.'
            );
        }
    }, [email, phone, message]);

    const isFormValid = email && phone && !emailError && !phoneError;

    const ButtonLabel = isSubmitted ? (
        <span className="flex items-center space-x-2" style={{ fontFamily: 'Robit' }}>
            <Check size={20} />
            <span>Success!</span>
        </span>
    ) : (
        <span className="flex items-center space-x-2" style={{ fontFamily: 'Robit' }}>
            <MessageSquare size={20} />
            <span>Connect with Us</span>
        </span>
    );

    return (
        <div className="relative w-full font-robit">
            <button
                onClick={toggleForm}
                className="w-full h-12 md:w-auto md:min-w-[12rem] px-6 text-white font-semibold rounded-full shadow-lg transition-all duration-300
                        bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95"
                style={{ fontFamily: 'Robit' }}
            >
                {ButtonLabel}
            </button>
            {isFormOpen && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-950 border border-blue-600 rounded-xl shadow-2xl p-6 transition-all duration-300 ease-in-out w-full max-w-md mx-auto">
                        <div className="flex justify-between items-center mb-4" style={{ fontFamily: 'Robit' }}>
                            <h3 className="text-white text-xl font-semibold">Let's Talk</h3>
                            <button
                                onClick={toggleForm}
                                className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-full bg-gray-800 hover:bg-gray-700"
                                aria-label="Close form"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <form className="flex flex-col space-y-4 w-full" onSubmit={handleButtonClick} style={{ fontFamily: 'Robit' }}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email *"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (emailError) setEmailError('');
                                    }}
                                    className={`p-3 rounded-lg bg-purple-950 text-white text-sm border ${emailError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                                    required
                                    disabled={isSubmitted}
                                    style={{ fontFamily: 'Robit' }}
                                />
                                {emailError && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{emailError}</p>}
                            </div>
                            <div className="relative pt-4">
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number *"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        if (phoneError) setPhoneError('');
                                    }}
                                    className={`p-3 rounded-lg bg-purple-950 text-white text-sm border ${phoneError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full`}
                                    required
                                    disabled={isSubmitted}
                                    style={{ fontFamily: 'Robit' }}
                                />
                                {phoneError && <p className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0">{phoneError}</p>}
                            </div>
                            <div className="relative pt-4">
                                <textarea
                                    placeholder="Write your project request or service inquiry..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="p-3 rounded-lg bg-purple-950 text-white text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full h-32 resize-none"
                                    disabled={isSubmitted}
                                    style={{ fontFamily: 'Robit' }}
                                />
                            </div>
                            <p className="text-gray-400 text-sm">
                                Please share details about your project or services you are interested in.
                            </p>
                            {apiError && (
                                <p className="text-red-500 text-xs mb-2">{apiError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={!isFormValid || isSubmitted}
                                className={`
                                    mt-6 relative inline-flex h-12 w-full items-center justify-center font-bold text-base rounded-lg transition-all duration-300 overflow-hidden
                                    ${isSubmitted
                                        ? 'bg-green-600 border-2 border-green-600'
                                        : isFormValid
                                            ? 'bg-blue-600 border-2 border-blue-600 hover:bg-blue-700'
                                            : 'bg-gray-700 border-2 border-gray-700 opacity-70 cursor-not-allowed'
                                    }
                                `}
                                style={{ fontFamily: 'Robit' }}
                            >
                                <span className={`transition-all duration-300 ease-in-out ${isSubmitted ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                                    Send Request <Rocket size={20} className="inline ml-2" />
                                </span>
                                <span className={`absolute transition-all duration-300 ease-in-out ${isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                    <Check size={20} className="inline mr-2" /> Request Sent!
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConnectButtonAndForm;