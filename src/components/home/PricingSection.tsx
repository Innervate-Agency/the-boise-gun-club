'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export default function PricingSection() {
    return (
        <>
            {/* Membership CTA - Clean and Simple */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Join the Club
                            </h2>
                            <p className="text-xl text-[var(--text-secondary)] mb-8">
                                $75 annual membership gives you access to reduced shooting fees, priority registration, 
                                and a welcoming community of fellow shooting sports enthusiasts.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">$6/round</Badge>
                                    <span>Member rate vs $8 daily rate</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Priority</Badge>
                                    <span>Competition registration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">Community</Badge>
                                    <span>Access to member events and forums</span>
                                </div>
                            </div>
                            <Button asChild size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                                <Link href="/membership">Join Today</Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/membership.webp"
                                width={600}
                                height={400}
                                className="rounded-xl"
                                alt="Club Membership"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-heading uppercase tracking-tight">
                            Shooting <span className="text-[var(--accent-primary)]">Rates</span>
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] font-body font-light">
                            Fair pricing for world-class facilities and instruction.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <Card className="relative">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold mb-4 font-heading uppercase">Daily Rate</h3>
                                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$8</div>
                                <p className="text-[var(--text-secondary)] mb-6">per round</p>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Access to all ranges</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Equipment rental available</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Guest privileges</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative border-2 border-[var(--accent-primary)]">
                            <CardContent className="p-8 text-center">
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--accent-primary)] text-white">Popular</Badge>
                                <h3 className="text-2xl font-bold mb-4 font-heading uppercase">Member Rate</h3>
                                <div className="text-5xl font-bold text-[var(--accent-primary)] mb-4">$6</div>
                                <p className="text-[var(--text-secondary)] mb-6">per round + $75 annual fee</p>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>$2 savings per round</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Priority competition registration</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Member events access</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                                        <span>Clubhouse privileges</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}