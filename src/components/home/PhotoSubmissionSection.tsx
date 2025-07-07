'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Camera, Trophy, Users } from 'lucide-react';

export default function PhotoSubmissionSection() {
    return (
        <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-['Rajdhani'] uppercase tracking-tight">
                        Share Your Shot,<br />
                        <span className="text-[var(--accent-primary)]">Become Our Hero!</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Noto Sans'] font-light">
                        Submit your best shooting photos and we'll feature them as the hero image on our homepage! 
                        Every month, we showcase a different member's photo as the first thing visitors see.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
                        <CardContent className="p-8">
                            <div className="relative">
                                <Camera className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase tracking-wide">Hero Homepage Feature</h3>
                            <p className="text-[var(--text-secondary)] font-['Noto Sans'] font-light leading-relaxed">Monthly rotation of member photos as our main hero image</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
                        <CardContent className="p-8">
                            <div className="relative">
                                <Trophy className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Photo Contest Prizes</h3>
                            <p className="text-[var(--text-secondary)] font-['Noto Sans']">Quarterly competitions with range time and gear prizes</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-0 shadow-xl hover:shadow-2xl">
                        <CardContent className="p-8">
                            <div className="relative">
                                <Users className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-['Rajdhani'] uppercase">Member Spotlight</h3>
                            <p className="text-[var(--text-secondary)] font-['Noto Sans']">Photo + story featured in newsletter and social media</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="text-center">
                    <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-8">
                        <Link href="/photo-submission">Submit Your Photos</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}