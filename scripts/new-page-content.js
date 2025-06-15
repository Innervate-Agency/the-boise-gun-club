module.exports = [
  {
    path: 'schedule/weekly',
    title: 'Weekly Shoot Schedule',
    description: 'Find our regular hours for trap, skeet, and sporting clays, plus special weekly events.',
    sections: [
      {
        title: 'Regular Hours',
        subtitle: 'Open Shooting Times',
        description: 'Our standard hours for member and public access to all fields. Check the calendar for any closures due to private events or holidays.',
        link: '/schedule/reservations',
        linkText: 'Reserve a Time Slot'
      },
      {
        title: 'Weekly Leagues',
        subtitle: 'Friendly Competition',
        description: 'Join our ongoing trap, skeet, and sporting clays leagues. A great way to sharpen your skills and meet fellow shooters. All skill levels are welcome.',
        link: '/schedule/competitions',
        linkText: 'View League Standings'
      }
    ]
  },
  {
    path: 'schedule/competitions',
    title: 'Competition Calendar',
    description: 'Upcoming registered and fun shoots for trap, skeet, and sporting clays.',
    sections: [
      {
        title: 'Registered Tournaments',
        subtitle: 'NSCA & NSSA Sanctioned Events',
        description: 'View our schedule of official registered tournaments. Find event details, registration links, and results from past competitions.',
        link: '/forum/matches',
        linkText: 'Discuss Upcoming Matches'
      },
      {
        title: 'Fun Shoots & Club Events',
        subtitle: 'Casual Competitions',
        description: 'From our annual Turkey Shoot to charity fundraisers, check out the fun and friendly competitions happening at the club.',
        link: '/gallery',
        linkText: 'See Photos From Past Events'
      }
    ]
  },
  {
    path: 'schedule/training',
    title: 'Training & Instruction',
    description: 'Professional instruction for shooters of all levels, from beginners to seasoned competitors.',
    sections: [
      {
        title: 'New Shooter Introduction',
        subtitle: 'Learn the Fundamentals',
        description: 'Our certified instructors will guide you through firearm safety, range etiquette, and the basics of trap, skeet, and sporting clays. Equipment provided.',
        link: '/contact',
        linkText: 'Book a Lesson'
      },
      {
        title: 'Advanced Coaching',
        subtitle: 'Refine Your Skills',
        description: 'One-on-one coaching for experienced shooters looking to break more targets. We offer specialized instruction in all shotgun disciplines.',
        link: '/contact',
        linkText: 'Meet Our Instructors'
      }
    ]
  },
  {
    path: 'schedule/reservations',
    title: 'Range Reservations',
    description: 'Book your time on our trap, skeet, and sporting clays courses.',
    sections: [
      {
        title: 'Online Booking Portal',
        subtitle: 'Reserve Your Spot',
        description: 'Members can reserve range time in advance through our online portal. Ensure your preferred time is available, especially on busy weekends.',
        link: '#',
        linkText: 'Access Booking Portal'
      },
      {
        title: 'Corporate & Group Events',
        subtitle: 'Host Your Outing With Us',
        description: 'We offer packages for corporate team-building, bachelor parties, and other group events. A safe, exciting, and unique experience for all.',
        link: '/contact',
        linkText: 'Inquire About Group Rates'
      }
    ]
  },
  {
    path: 'ranges/status',
    title: 'Range Status',
    description: 'Live updates on range conditions, closures, and availability.',
    sections: [
      {
        title: 'Current Conditions',
        subtitle: 'What to Expect Today',
        description: 'Check here for real-time information on weather-related closures, maintenance activities, or any other factors affecting range operations.',
        link: '/weather',
        linkText: 'View Local Forecast'
      },
      {
        title: 'Event & Maintenance Calendar',
        subtitle: 'Plan Your Visit',
        description: 'View our calendar to see dates and times for major competitions, private events, and scheduled range maintenance that may affect availability.',
        link: '/schedule/competitions',
        linkText: 'See Competition Schedule'
      }
    ]
  },
  {
    path: 'weather',
    title: 'Weather Conditions',
    description: 'Local weather forecast and information on how conditions affect shooting.',
    sections: [
      {
        title: 'Local Forecast',
        subtitle: 'Plan Your Day',
        description: 'Get the latest weather forecast for the Boise area to plan your trip to the range. We generally stay open rain or shine, but will close for severe weather.',
        link: '#',
        linkText: 'View Detailed Forecast'
      },
      {
        title: 'Weather Safety',
        subtitle: 'When We Close',
        description: 'For the safety of our members and staff, we will suspend shooting activities in the event of lightning or high winds. Please check Range Status for updates.',
        link: '/ranges/status',
        linkText: 'Check Range Status'
      }
    ]
  },
  {
    path: 'rules',
    title: 'Club Rules & Safety',
    description: 'Our primary commitment is to the safety of our members, guests, and staff.',
    sections: [
      {
        title: 'General Range Safety',
        subtitle: 'Everyone\'s Responsibility',
        description: 'Eye and ear protection are mandatory at all times. Actions must be open and firearms unloaded when not on the shooting station. Muzzles must be pointed in a safe direction at all times.',
        link: '#',
        linkText: 'Read Full Safety Rules'
      },
      {
        title: 'Ammunition & Equipment',
        subtitle: 'Shotgun Sports Only',
        description: 'Only shotguns are permitted. No slugs or buckshot. Shot size is limited to 7.5, 8, or 9. Please consult a Range Safety Officer if you have questions about your firearm or ammunition.',
        link: '/contact',
        linkText: 'Contact a Range Officer'
      }
    ]
  },
  {
    path: 'emergency',
    title: 'Emergency Information',
    description: 'Procedures and contact information for emergencies at the club.',
    sections: [
      {
        title: 'Immediate Actions',
        subtitle: 'In Case of Emergency',
        description: 'In any emergency, immediately call 911. Then, notify the nearest Range Safety Officer. First aid kits and AEDs are located in the clubhouse.',
        link: '#',
        linkText: 'View Clubhouse Map'
      },
      {
        title: 'Contact Information',
        subtitle: 'Club Address and Contacts',
        description: 'Our physical address is [Club Address, Boise, ID]. This is critical for emergency services. The clubhouse phone number is [Club Phone Number].',
        link: '/contact',
        linkText: 'See All Club Contacts'
      }
    ]
  },
  {
    path: 'members/portal',
    title: 'Member Portal',
    description: 'Access your member profile, renew your membership, and find member-exclusive resources.',
    sections: [
      {
        title: 'My Profile',
        subtitle: 'Manage Your Information',
        description: 'Update your contact details, view your membership status, and check your volunteer hours.',
        link: '#',
        linkText: 'Access Your Profile'
      },
      {
        title: 'Club Documents',
        subtitle: 'Bylaws, Minutes, and More',
        description: 'Find important club documents, including the latest club bylaws, board meeting minutes, and financial reports.',
        link: '#',
        linkText: 'View Document Library'
      }
    ]
  },
  {
    path: 'members/billing',
    title: 'Billing & Payment Center',
    description: 'Securely pay your annual membership dues and other fees online.',
    sections: [
      {
        title: 'Renew Your Membership',
        subtitle: 'Pay Dues Online',
        description: 'Renew your Individual or Family membership quickly and securely. We accept all major credit cards through our secure payment portal.',
        link: '#',
        linkText: 'Go to Payment Portal'
      },
      {
        title: 'Payment History',
        subtitle: 'View Your Transactions',
        description: 'Access a history of your past membership payments and other transactions with the club.',
        link: '/members/portal',
        linkText: 'Access Your Profile'
      }
    ]
  },
  {
    path: 'members/directory',
    title: 'Member Directory',
    description: 'Connect with fellow club members. This directory is opt-in only.',
    sections: [
      {
        title: 'Find a Member',
        subtitle: 'Search the Directory',
        description: 'Look up fellow members by name. To protect privacy, only name and city are displayed. You must be a logged-in member to view the directory.',
        link: '#',
        linkText: 'Search Directory'
      },
      {
        title: 'Join the Directory',
        subtitle: 'Get Listed',
        description: 'Want to be included in the directory? Go to your member profile to opt-in and choose what information you\'d like to share.',
        link: '/members/portal',
        linkText: 'Update Your Profile'
      }
    ]
  },
  {
    path: 'members/volunteer',
    title: 'Volunteer Opportunities',
    description: 'Our club runs on volunteer power. Find out how you can contribute.',
    sections: [
      {
        title: 'Why We Need You',
        subtitle: 'The Heart of the Club',
        description: 'Volunteer efforts in range maintenance, event staffing, and administration are what keep our facilities top-notch and our dues affordable. We require 10 hours per year or a $200 work fee.',
        link: '#',
        linkText: 'Log Your Volunteer Hours'
      },
      {
        title: 'Current Openings',
        subtitle: 'Ways to Help',
        description: 'We need help with everything from mowing and target setting to helping at competitions and special events. There are opportunities for all skill levels and physical abilities.',
        link: '/contact',
        linkText: 'Contact the Volunteer Coordinator'
      }
    ]
  },
  {
    path: 'forum/marketplace',
    title: 'Forum: Marketplace',
    description: 'Buy, sell, and trade shotguns, reloading gear, and accessories with fellow members.',
    sections: [
      {
        title: 'Marketplace Rules',
        subtitle: 'Read Before Posting',
        description: 'All transactions are private. All firearm sales must comply with state and federal laws, including transfers through a licensed FFL dealer. Open to members in good standing only.',
        link: '#',
        linkText: 'Read Full Rules'
      },
      {
        title: 'Browse Categories',
        subtitle: 'Find What You Need',
        description: 'Our marketplace is organized into categories: Shotguns (Trap/Skeet/Sporting), Reloading Gear, Shooting Equipment, and Wanted to Buy.',
        link: '#',
        linkText: 'Go to Marketplace'
      }
    ]
  },
  {
    path: 'forum/matches',
    title: 'Forum: Match Discussion',
    description: 'Discuss upcoming competitions, find squadmates, and share results.',
    sections: [
      {
        title: 'Find a Squad',
        subtitle: 'Team Up for Events',
        description: 'Looking for a squad for the next big shoot? Post here to connect with other members and form a team.',
        link: '#',
        linkText: 'View Squadding Board'
      },
      {
        title: 'Post-Match Chat',
        subtitle: 'Share Your Experience',
        description: 'Talk about the targets, congratulate the winners, and share your stories from our latest trap, skeet, and sporting clays competitions.',
        link: '#',
        linkText: 'Join the Discussion'
      }
    ]
  },
  {
    path: 'forum/general',
    title: 'Forum: General Discussion',
    description: 'A place for general club chat, shotgun talk, and reloading questions.',
    sections: [
      {
        title: 'Shotgun Talk',
        subtitle: 'All About the Guns',
        description: 'Discuss your favorite shotgun brands, models, gun fit, and maintenance tips. Share your experience with different gear for trap, skeet, and sporting.',
        link: '#',
        linkText: 'Go to Shotgun Talk'
      },
      {
        title: 'The Reloading Bench',
        subtitle: 'Tips and Recipes',
        description: 'Share your favorite load data, ask questions about presses and components, and discuss the fine art of crafting the perfect shotshell. Safety first!',
        link: '#',
        linkText: 'Go to Reloading Bench'
      }
    ]
  }
]; 