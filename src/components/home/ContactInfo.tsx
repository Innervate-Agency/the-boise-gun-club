'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

export default function ContactInfo() {
    return (
        <section className="py-24 bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] font-heading uppercase tracking-tight">
                        Get In <span className="text-[var(--accent-primary)]">Touch</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] font-body font-light">
                        Visit us at Idaho's premier shotgun sports facility.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <Card>
                            <CardContent className="p-6">
                                <Clock className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                                <h3 className="text-xl font-bold mb-3 font-heading uppercase">Range Hours</h3>
                                <div className="space-y-2 text-[var(--text-secondary)] font-body">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                                    <p>Closed major holidays</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-6">
                                <MapPin className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                                <h3 className="text-xl font-bold mb-3 font-heading uppercase">Location</h3>
                                <div className="space-y-2 text-[var(--text-secondary)] font-body">
                                    <p>123 Gun Club Road</p>
                                    <p>Boise, ID 83702</p>
                                    <p>20 minutes from downtown Boise</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3 font-heading uppercase">Contact Info</h3>
                                <div className="space-y-2 text-[var(--text-secondary)] font-body">
                                    <p>Phone: (208) 555-0123</p>
                                    <p>Email: info@boisegunclub.com</p>
                                </div>
                                <Button asChild className="mt-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                                    <Link href="/club-info">Get Directions</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    
                    <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                        <p className="text-gray-500 font-body">Interactive Map Coming Soon</p>
                    </div>
                </div>
            </div>
        </section>
    );
}