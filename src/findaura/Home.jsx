import React from 'react';
import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import Footer from "../components/ui/Footer";
import TherapistMatcher from "./TherapistMatcher";
import MagicBento from "../components/MagicBento";

const FindauraHome = () => {
    const { user } = useUser();

    return (
        <>
            <SignedIn>
                <div className="min-h-screen bg-black text-white font-robit flex flex-col">
                    <div className="w-screen flex flex-col min-h-screen">
                        <Navbar />
                        <main className="container mx-auto px-4 py-12 flex-grow">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                                <div>
                                    <h1 className="text-4xl font-bold text-[#DE9F3A] mb-2">
                                        Welcome back, {user?.firstName || "User"}!
                                    </h1>
                                    <p className="text-gray-400">Ready to continue your journey?</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <TherapistMatcher />
                                    <UserButton afterSignOutUrl="/findaura" />
                                </div>
                            </div>

                            <MagicBento
                                textAutoHide={true}
                                enableStars={false}
                                enableSpotlight={true}
                                enableBorderGlow={true}
                                enableTilt={true}
                                enableMagnetism={true}
                                clickEffect={true}
                                spotlightRadius={300}
                                particleCount={12}
                                glowColor="222, 159, 58" // #DE9F3A converted to RGB
                                cards={[
                                    {
                                        title: 'Your Journal',
                                        description: 'No entries yet. Start writing today.',
                                        label: 'Journal',
                                        color: '#1a1a1a'
                                    },
                                    {
                                        title: 'Upcoming Sessions',
                                        description: 'No appointments scheduled.',
                                        label: 'Sessions',
                                        color: '#1a1a1a'
                                    },
                                    {
                                        title: 'Insights',
                                        description: 'AI analysis will appear here.',
                                        label: 'AI',
                                        color: '#1a1a1a'
                                    },
                                    {
                                        title: 'Community',
                                        description: 'Connect with others.',
                                        label: 'Social',
                                        color: '#1a1a1a'
                                    }
                                ]}
                            />
                        </main>
                        <Footer />
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
};

export default FindauraHome;
