export type NavLink = {
  href: string
  label: string
}

export type Feature = {
  icon: string
  title: string
  description: string
}

export type ConnectionPoint = {
  icon: string
  title: string
  description: string
}

export type InstallStep = {
  step: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const navLinks: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#install', label: 'Install' },
  { href: '#stories', label: 'Stories' },
  { href: '#download', label: 'Download' },
]

export const heroContent = {
  badge: 'Seamless Connections',
  titleLines: ['Stay Connected', 'Stay Social', 'Stay You!'],
  description:
    "A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you - MyBindle is your home on the internet.",
  ctaLabel: 'Get Started',
  quickFacts: [
    'Real-time chat that feels instant',
    'Privacy controls built into every flow',
    'Communities, creators, and discovery in one place',
  ],
}

export const features: Feature[] = [
  {
    icon: '🔥',
    title: 'Seamless Connections',
    description: 'Stay in touch with friends, family, and like-minded people with just a tap.',
  },
  {
    icon: '📸',
    title: 'Share Your Story',
    description: "Upload photos, videos, and updates to let the world know what’s happening in your life.",
  },
  {
    icon: '💬',
    title: 'Real-Time Chat',
    description: "Whether it’s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your data, your control. We prioritize your privacy with world-class security.',
  },
  {
    icon: '🌎',
    title: 'Discover & Explore',
    description: 'Find trending content, join communities, and follow pages that match your interests.',
  },
  {
    icon: '💼',
    title: 'Grow Your Business',
    description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
  },
]

export const connectionPoints: ConnectionPoint[] = [
  {
    icon: '🎥',
    title: 'Short Videos & Reels',
    description: 'Share engaging, bite-sized content that keeps your audience entertained.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'Stay updated on what matters without the clutter and noise.',
  },
  {
    icon: '👥',
    title: 'Interest-Based Communities',
    description: 'Join groups and discussions that match your passions and goals.',
  },
]

export const installSteps: InstallStep[] = [
  {
    step: '01',
    title: 'Download',
    description: 'Open Play Store or App Store',
  },
  {
    step: '02',
    title: 'Install App',
    description: 'The app will install automatically.',
  },
  {
    step: '03',
    title: 'Ready to Use',
    description: 'Sign up or log in to start exploring!',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'This platform changed the way I stay in touch with my friends and family. Sharing everyday moments feels effortless.',
    name: 'Emily R',
    role: 'USA',
  },
  {
    quote:
      'Finally, a social network that understands what I need. The privacy features are a genuine game-changer for me.',
    name: 'Amit K',
    role: 'India',
  },
  {
    quote:
      "I joined just to explore, but now I cannot imagine my day without it. The chat experience feels quick and personal.",
    name: 'Sophie M',
    role: 'UK',
  },
  {
    quote:
      'Running my small business has never been easier. I can promote my products and connect with customers in one flow.',
    name: 'Javier L',
    role: 'Spain',
  },
  {
    quote:
      'The perfect blend of fun and functionality. Whether I go live or discover trending content, it all feels seamless.',
    name: 'Lucas T',
    role: 'Brazil',
  },
  {
    quote:
      'I have tried many social platforms, but this one truly stands out. The experience feels human and carefully designed.',
    name: 'Nora S',
    role: 'Canada',
  },
  {
    quote:
      'This platform brings people closer in the best way possible. From reconnecting with old friends to making new ones, every moment here feels special.',
    name: 'Patrick',
    role: 'Product Designer at COVEO',
  },
  {
    quote:
      'A social network that actually listens to its users. The design is sleek, the features are powerful, and the experience is seamless.',
    name: 'Mia D',
    role: 'Creative Lead at COVEO',
  },
]
