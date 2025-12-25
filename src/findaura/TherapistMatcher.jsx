import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, X } from 'lucide-react';

const TherapistMatcher = () => {
    const [isMatching, setIsMatching] = useState(false);
    const [matchFound, setMatchFound] = useState(false);
    const [profiles, setProfiles] = useState([]);

    // Generate random profile positions for the "chaos" phase
    useEffect(() => {
        if (isMatching) {
            const newProfiles = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                scale: Math.random() * 0.5 + 0.5,
                color: ['#DE9F3A', '#ffffff', '#333333'][Math.floor(Math.random() * 3)],
            }));
            setProfiles(newProfiles);

            // Simulate matching process
            const timer = setTimeout(() => {
                setMatchFound(true);
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setMatchFound(false);
            setProfiles([]);
        }
    }, [isMatching]);

    return (
        <>
            <button
                onClick={() => setIsMatching(true)}
                className="group relative px-8 py-4 bg-transparent border border-[#DE9F3A] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(222,159,58,0.3)]"
            >
                <div className="absolute inset-0 bg-[#DE9F3A] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3 text-[#DE9F3A] font-robit text-xl tracking-wider">
                    <Sparkles className="w-5 h-5" />
                    FIND YOUR MATCH
                </span>
            </button>

            <AnimatePresence>
                {isMatching && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
                    >
                        <button
                            onClick={() => setIsMatching(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {!matchFound ? (
                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute z-20 text-2xl md:text-4xl font-robit text-white tracking-[0.2em] uppercase"
                                >
                                    Analyzing Aura...
                                </motion.h2>

                                {profiles.map((profile) => (
                                    <motion.div
                                        key={profile.id}
                                        initial={{ x: profile.x * 2, y: profile.y * 2, opacity: 0, scale: 0 }}
                                        animate={{
                                            x: [profile.x, 0],
                                            y: [profile.y, 0],
                                            opacity: [0, 1, 0],
                                            scale: [profile.scale, 0]
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            times: [0, 0.8, 1]
                                        }}
                                        className="absolute w-12 h-16 rounded-lg border border-white/20 backdrop-blur-sm"
                                        style={{
                                            backgroundColor: profile.color + '20', // 20% opacity
                                            boxShadow: `0 0 15px ${profile.color}40`
                                        }}
                                    />
                                ))}

                                <motion.div
                                    className="absolute w-64 h-64 rounded-full border border-[#DE9F3A]/30"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute w-48 h-48 rounded-full border border-[#DE9F3A]/50"
                                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", damping: 20 }}
                                className="relative z-20 max-w-md w-full mx-4 bg-[#1a1a1a] border border-[#DE9F3A]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(222,159,58,0.15)]"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#DE9F3A] to-[#8a5e1a] mb-6 flex items-center justify-center shadow-lg">
                                        <User className="w-16 h-16 text-black" />
                                    </div>
                                    <h3 className="text-3xl font-robit text-white mb-2">Muskaan Tewari</h3>
                                    <p className="text-[#DE9F3A] mb-6 font-robit tracking-wide">CLINICAL PSYCHOLOGIST</p>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        Specializes in anxiety, cognitive behavioral therapy, and mindfulness-based stress reduction.
                                        <br />
                                        <span className="text-sm text-white/50 mt-2 block">98% Compatibility Match</span>
                                    </p>
                                    <button className="w-full py-4 bg-[#DE9F3A] text-black font-bold rounded-xl hover:bg-[#c98b2d] transition-colors">
                                        Connect Now
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TherapistMatcher;
