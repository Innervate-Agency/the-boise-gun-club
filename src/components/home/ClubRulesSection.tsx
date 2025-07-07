'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export default function ClubRulesSection() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Rajdhani'] uppercase tracking-tight">
                            Safety <span className="text-[var(--accent-primary)]">First</span>
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] mb-8 font-['Noto Sans'] font-light">
                            Our comprehensive safety rules ensure everyone has a safe, enjoyable experience. We maintain the highest standards for shotgun sports.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                                <div>
                                    <h4 className="font-bold font-['Rajdhani'] uppercase">Eye & Ear Protection Required</h4>
                                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Safety glasses and hearing protection mandatory at all times</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                                <div>
                                    <h4 className="font-bold font-['Rajdhani'] uppercase">Shotgun Ammunition Only</h4>
                                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">This is a shotgun-only facility - no rifle or pistol ammunition</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                                <div>
                                    <h4 className="font-bold font-['Rajdhani'] uppercase">Range Officer Authority</h4>
                                    <p className="text-[var(--text-secondary)] font-['Noto Sans']">Follow all range officer commands immediately</p>
                                </div>
                            </div>
                        </div>
                        
                        <Button asChild variant="outline" size="lg">
                            <Link href="/rules">View All Safety Rules</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/training.webp"
                            width={600}
                            height={400}
                            className="rounded-xl"
                            alt="Safety Training"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}