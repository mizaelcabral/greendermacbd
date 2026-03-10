import React, { useState, useEffect } from 'react';
import { ShieldCheck, XCircle } from 'lucide-react';

export default function AgeVerification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isAdult = localStorage.getItem('greenderma-age-verified');
        if (!isAdult) {
            setIsVisible(true);
        }
    }, []);

    const handleConfirm = () => {
        localStorage.setItem('greenderma-age-verified', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0a1f12]/90 backdrop-blur-xl">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden text-center transition-all duration-500 animate-in fade-in zoom-in">
                {/* Decorative elements */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#689f38]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex justify-center mb-8">
                        <div className="bg-[#FFD600] p-4 rounded-2xl shadow-lg shadow-yellow-400/20">
                            <ShieldCheck className="w-10 h-10 text-black" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                        Age Verification
                    </h2>

                    <p className="text-gray-300 mb-10 leading-relaxed font-light text-sm">
                        Greenderma provides specialized information on medical cannabis products.
                        By entering, you confirm you are 18+ and agree to our terms of use regarding therapeutic education.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleConfirm}
                            className="bg-[#FFD600] text-black px-4 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all active:scale-95 cursor-pointer text-xs uppercase tracking-widest"
                        >
                            Confirm 18+
                        </button>
                        <button
                            onClick={handleDecline}
                            className="border border-white/20 text-white px-4 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer text-xs flex items-center justify-center group uppercase tracking-widest"
                        >
                            <XCircle className="mr-2 w-4 h-4 text-red-400 group-hover:text-red-300" />
                            Exit Site
                        </button>
                    </div>

                    <p className="mt-8 text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                        Greenderma CBD Wellness &copy; 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
