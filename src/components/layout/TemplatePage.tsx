'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';
import { SearchIcon, HomeIcon } from 'lucide-react';

interface TemplatePageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ title, description, children }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Standardized Hero Section */}
            <motion.header
              className="mb-16"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Left Side: Breadcrumbs, Title, Description */}
                <div className="space-y-4 text-left">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link href="/"><HomeIcon className="h-4 w-4" /></Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {/* This should be dynamic based on page hierarchy */}
                        <BreadcrumbLink asChild>
                          <Link href="/club-info">Club Info</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                    {title}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                    {description}
                  </p>
                </div>

                {/* Right Side: Search Bar */}
                <div className="w-full md:w-auto md:min-w-[300px]">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search this section..." className="pl-10" />
                  </div>
                </div>
              </div>
            </motion.header>

            {/* Custom content from child pages */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplatePage;
