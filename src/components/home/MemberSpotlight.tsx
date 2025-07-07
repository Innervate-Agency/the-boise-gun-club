'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MemberSpotlightProps {
    name: string;
    quote: string;
    imageUrl: string;
    yearJoined: number;
    achievements: string[];
}

export default function MemberSpotlight({ name, quote, imageUrl, yearJoined, achievements }: MemberSpotlightProps) {
    return (
        <section className="py-24 bg-[var(--bg-secondary)]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--text-primary)] font-heading uppercase tracking-tight">
                    Member <span className="text-[var(--accent-primary)]">Spotlight</span>
                </h2>
                
                <Card>
                    <CardContent className="p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <Image
                                src={imageUrl}
                                width={150}
                                height={150}
                                className="rounded-full"
                                alt={name}
                            />
                            <div className="text-left">
                                <blockquote className="text-2xl font-light italic text-[var(--text-primary)] mb-6 font-body">
                                    "{quote}"
                                </blockquote>
                                <div>
                                    <p className="font-bold text-lg font-heading uppercase">{name}</p>
                                    <p className="text-[var(--text-secondary)] font-body">Member since {yearJoined}</p>
                                    <div className="flex gap-2 mt-2">
                                        {achievements.map((achievement, index) => (
                                            <Badge key={index}>{achievement}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}