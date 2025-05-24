import { useState, useEffect } from 'react';

interface ContentData {
  events: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }>;
  clubInfo: {
    name: string;
    founded: string;
    members: string;
    acres: string;
    address: string;
    phone: string;
    email: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    holidays: string;
  };
  gallery: Array<{
    id: number;
    title: string;
    image: string;
    year: string;
  }>;
}

export const useContent = () => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        } else {
          throw new Error('Failed to fetch content');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback to default content
        setContent({
          events: [
            {
              id: 1,
              title: "Annual Championship",
              date: "2025-11-15",
              time: "9:00 AM",
              location: "Main Range",
              description: "Annual championship competition"
            },
            {
              id: 2,
              title: "Winter League",
              date: "2025-12-01", 
              time: "7:00 PM",
              location: "Clubhouse",
              description: "Winter league meeting"
            }
          ],
          clubInfo: {
            name: "Boise Gun Club",
            founded: "1898",
            members: "1200+",
            acres: "320",
            address: "123 Gun Club Road, Boise, ID 83702",
            phone: "(208) 555-0123",
            email: "info@boisegunclub.com"
          },
          hours: {
            weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
            weekends: "Saturday - Sunday: 8:00 AM - 8:00 PM",
            holidays: "Closed on major holidays"
          },
          gallery: [
            {
              id: 1,
              title: "Championship Winner 1978",
              image: "/images/clay1.jpg",
              year: "1978"
            },
            {
              id: 2,
              title: "Main Range",
              image: "/images/range1.jpg",
              year: "2023"
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
