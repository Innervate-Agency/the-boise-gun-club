// use client
'use client';

import Button from '../../components/ui/Button';
import AnimatedCard from '../../components/ui/AnimatedCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import image from '../../public/images/membership.jpg';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-leonard-yellow">Welcome to Boise Gun Club</h1>
      <p className="mb-8">Your premier destination for shooting sports in the Treasure Valley.</p>

      <div className="mb-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button>View Events</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary" className="ml-4">Learn More</Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedCard>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Membership</h3>
          <p className="mb-4">Join our community of shooting enthusiasts.</p>
          <Image src={image} alt="Membership" width={300} height={200} />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary">Join Now</Button>
          </motion.div>
        </AnimatedCard>

        <AnimatedCard>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Events</h3>
          <p className="mb-4">Check out our upcoming competitions and gatherings.</p>
          <Image src={image} alt="Events" width={300} height={200} />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary">See Calendar</Button>
          </motion.div>
        </AnimatedCard>

        <AnimatedCard>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Training</h3>
          <p className="mb-4">Improve your skills with our certified instructors.</p>
          <Image src={image} alt="Training" width={300} height={200} />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </AnimatedCard>
      </div>
    </div>
  );
}