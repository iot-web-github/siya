import { BlogPost, Category } from '../types/blog';

export const categories: Category[] = [
  { id: '1', name: 'Technology', count: 12 },
  { id: '2', name: 'Design', count: 8 },
  { id: '3', name: 'Business', count: 6 },
  { id: '4', name: 'Lifestyle', count: 4 },
  { id: '5', name: 'Travel', count: 3 },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.',
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. As we move through 2025, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h3>AI-Powered Development Tools</h3>
      <p>Artificial intelligence is revolutionizing the development process. From intelligent code completion to automated testing, AI tools are making developers more productive than ever before.</p>
      
      <h3>Enhanced User Experiences</h3>
      <p>Modern web applications are becoming more sophisticated, offering native-like experiences through progressive web apps and advanced JavaScript frameworks.</p>
      
      <p>The integration of machine learning capabilities directly into web browsers is opening up new possibilities for creating intelligent, responsive applications that adapt to user behavior in real-time.</p>
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Senior Frontend Developer with 8+ years of experience in modern web technologies.'
    },
    publishedAt: '2025-01-15',
    readingTime: 8,
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Trends', 'JavaScript'],
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering Modern CSS: Grid, Flexbox, and Beyond',
    excerpt: 'Deep dive into advanced CSS techniques that every modern developer should know, including practical examples and best practices.',
    content: `
      <h2>The Power of Modern CSS</h2>
      <p>CSS has evolved significantly over the years, introducing powerful layout systems that make creating complex, responsive designs easier than ever.</p>
      
      <h3>CSS Grid: The Ultimate Layout Tool</h3>
      <p>CSS Grid provides unparalleled control over two-dimensional layouts, allowing developers to create sophisticated designs with minimal code.</p>
      
      <h3>Flexbox for Component Layout</h3>
      <p>While Grid excels at page-level layouts, Flexbox remains the go-to solution for component-level arrangements and one-dimensional layouts.</p>
      
      <p>Understanding when and how to use these tools together creates a powerful foundation for modern web design.</p>
    `,
    author: {
      name: 'Marcus Rodriguez',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'UI/UX Designer and CSS specialist passionate about creating beautiful, functional interfaces.'
    },
    publishedAt: '2025-01-12',
    readingTime: 6,
    category: 'Design',
    tags: ['CSS', 'Web Design', 'Grid', 'Flexbox'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Building Scalable SaaS Applications: Lessons Learned',
    excerpt: 'Key insights and strategies for building software-as-a-service applications that can scale from startup to enterprise level.',
    content: `
      <h2>The SaaS Success Framework</h2>
      <p>Building a successful SaaS application requires careful planning, robust architecture, and a deep understanding of user needs.</p>
      
      <h3>Architecture Considerations</h3>
      <p>From the beginning, your application architecture should be designed with scalability in mind. This includes database design, API structure, and deployment strategies.</p>
      
      <h3>User Experience is Key</h3>
      <p>The most technically impressive application will fail if users can't easily understand and use it. Focus on intuitive design and smooth onboarding experiences.</p>
      
      <p>Success in the SaaS space requires balancing technical excellence with business acumen and user-centered design.</p>
    `,
    author: {
      name: 'Elena Petrov',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product Manager and former software engineer with experience scaling multiple SaaS products.'
    },
    publishedAt: '2025-01-10',
    readingTime: 10,
    category: 'Business',
    tags: ['SaaS', 'Scalability', 'Product Management', 'Startup'],
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '4',
    title: 'The Art of Minimalist Design: Less is More',
    excerpt: 'Discover how minimalist design principles can improve user experience and create more impactful digital products.',
    content: `
      <h2>Understanding Minimalism in Design</h2>
      <p>Minimalist design is not about removing features or making things bland. It's about focusing on what truly matters and eliminating distractions.</p>
      
      <h3>White Space as a Design Element</h3>
      <p>Strategic use of white space can dramatically improve readability and guide user attention to the most important elements.</p>
      
      <h3>Typography and Hierarchy</h3>
      <p>In minimalist design, typography becomes even more important. Clear hierarchy and readable fonts are essential for effective communication.</p>
      
      <p>The goal is to create designs that are both beautiful and functional, where every element serves a purpose.</p>
    `,
    author: {
      name: 'James Liu',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative Director with a passion for clean, impactful design solutions.'
    },
    publishedAt: '2025-01-08',
    readingTime: 5,
    category: 'Design',
    tags: ['Minimalism', 'UI Design', 'Typography', 'User Experience'],
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Remote Work: Building Productive Digital Nomad Habits',
    excerpt: 'Practical tips and strategies for maintaining productivity and work-life balance while working remotely from anywhere in the world.',
    content: `
      <h2>The Digital Nomad Revolution</h2>
      <p>Remote work has opened up incredible opportunities for location independence, but it also comes with unique challenges that require intentional habits and systems.</p>
      
      <h3>Creating Structure in Flexibility</h3>
      <p>The freedom of remote work can be both liberating and overwhelming. Establishing routines and boundaries is crucial for long-term success.</p>
      
      <h3>Technology and Tools</h3>
      <p>The right technology stack can make or break your remote work experience. From communication tools to project management platforms, choose wisely.</p>
      
      <p>Success as a digital nomad requires discipline, excellent communication skills, and the ability to adapt to different environments and time zones.</p>
    `,
    author: {
      name: 'Sophie Anderson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Digital nomad and productivity consultant helping remote workers thrive from anywhere.'
    },
    publishedAt: '2025-01-05',
    readingTime: 7,
    category: 'Lifestyle',
    tags: ['Remote Work', 'Productivity', 'Digital Nomad', 'Work-Life Balance'],
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Exploring Hidden Gems: Off-the-Beaten-Path Destinations',
    excerpt: 'Discover incredible travel destinations that offer authentic experiences away from the crowds of popular tourist spots.',
    content: `
      <h2>The Joy of Discovery</h2>
      <p>While popular destinations have their merits, some of the most memorable travel experiences come from exploring places that haven't been overrun by tourism.</p>
      
      <h3>Research and Planning</h3>
      <p>Finding hidden gems requires more research than booking a trip to Paris, but the rewards are immeasurable. Local blogs, forums, and travel communities are invaluable resources.</p>
      
      <h3>Respecting Local Communities</h3>
      <p>When visiting lesser-known destinations, it's especially important to travel responsibly and respect local customs and environments.</p>
      
      <p>The best hidden gems are often discovered through conversations with locals and fellow travelers who are willing to share their secret spots.</p>
    `,
    author: {
      name: 'David Martinez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Travel photographer and writer documenting unique destinations around the world.'
    },
    publishedAt: '2025-01-03',
    readingTime: 6,
    category: 'Travel',
    tags: ['Travel', 'Adventure', 'Hidden Gems', 'Photography'],
    image: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];