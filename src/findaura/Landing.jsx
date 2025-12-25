import React from "react";
import { BookOpen, HeartHandshake, Users } from "lucide-react";
import { SignUpButton, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/ui/Footer";

const FindauraLanding = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-[#DE9F3A]" />,
            title: "Intelligent Journaling",
            description: "Empower your journey with AI-driven insights and secure, private reflection spaces."
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-[#DE9F3A]" />,
            title: "Therapist Aid",
            description: "Advanced tools to assist professionals in understanding and supporting their clients better."
        },
        {
            icon: <Users className="w-8 h-8 text-[#DE9F3A]" />,
            title: "Client Management",
            description: "Streamline connections, appointments, and progress tracking in one unified platform."
        }
    ];

    return (
        <div className="w-screen min-h-screen flex flex-col" style={{ fontFamily: "robit, sans-serif" }}>
            <Navbar />
            <div
                className="flex flex-col items-center w-full flex-grow text-white"
                style={{ background: "transparent" }}
            >
                {/* Redirect if already signed in */}
                <SignedIn>
                    <Navigate to="/findaura/home" replace />
                </SignedIn>

                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center w-full px-4 pt-20 pb-12 text-center md:pt-32 md:pb-20">
                    <img
                        src="/FindAura..png"
                        alt="FindAura Logo"
                        className="mb-8 w-48 md:w-64 h-auto"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        The Future of <span className="text-[#DE9F3A]">Mental Health</span> Connection
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
                        An AI-powered ecosystem for journaling, therapist assistance, and seamless client management.
                        <br className="hidden md:block" />
                        Built solely by therapists, psychologists, and mental health professionals.
                    </p>

                    <div className="flex gap-4">
                        <SignedOut>
                            <SignUpButton mode="modal" forceRedirectUrl="/findaura/home">
                                <button
                                    className="px-10 py-4 rounded-full bg-[#DE9F3A] text-black font-bold text-xl hover:bg-[#c98b2d] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#DE9F3A]/20"
                                >
                                    Try Now
                                </button>
                            </SignUpButton>

                            <SignInButton mode="modal" forceRedirectUrl="/findaura/home">
                                <button
                                    className="px-10 py-4 rounded-full border border-[#DE9F3A] text-[#DE9F3A] font-bold text-xl hover:bg-[#DE9F3A]/10 transform hover:scale-105 transition-all duration-300"
                                >
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full max-w-7xl px-4 py-16 md:py-24 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start text-left p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DE9F3A]/50 transition-colors duration-300 backdrop-blur-sm"
                            >
                                <div className="mb-6 p-4 rounded-full bg-white/5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#DE9F3A]">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default FindauraLanding;
