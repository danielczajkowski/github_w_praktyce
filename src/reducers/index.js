const initialState = {
  notes: [
    {
      id: 1,
      title: 'Shopping List',
      createdAt: '2 hours ago',
      content: "Buy groceries: milk, eggs, bread, coffee. Don't forget the cat food!",
    },
    {
      id: 2,
      title: 'Project Ideas',
      createdAt: '1 day ago',
      content:
        'Build a personal finance tracker app using React and Firebase. Add charts for expenses.',
    },
    {
      id: 3,
      title: 'Meeting Notes',
      createdAt: '3 days ago',
      content:
        'Discussed new feature roadmap. Priority: user authentication and dark mode implementation.',
    },
    {
      id: 4,
      title: 'Book Recommendations',
      createdAt: '5 days ago',
      content:
        'Clean Code by Robert Martin, Refactoring by Martin Fowler, Design Patterns by Gang of Four.',
    },
    {
      id: 5,
      title: 'Workout Plan',
      createdAt: '1 week ago',
      content:
        'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Legs, Friday: Core exercises.',
    },
    {
      id: 6,
      title: 'Learning Goals',
      createdAt: '2 weeks ago',
      content: 'Master TypeScript generics, learn GraphQL basics, practice system design patterns.',
    },
    {
      id: 7,
      title: 'Travel Plans',
      createdAt: '3 weeks ago',
      content:
        'Summer vacation to Croatia. Check flights, book accommodation in Split, plan island hopping.',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React Hooks Best Practices',
      createdAt: '1 day ago',
      content:
        'Discover the most effective patterns for using React Hooks in production applications.',
      articleUrl: 'https://react.dev/hooks',
    },
    {
      id: 2,
      title: 'TypeScript Advanced Types',
      createdAt: '3 days ago',
      content:
        'Deep dive into advanced TypeScript types including conditional types and mapped types.',
      articleUrl: 'https://www.typescriptlang.org',
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      createdAt: '1 week ago',
      content:
        'Understanding when to use CSS Grid and when Flexbox is the better choice for layouts.',
      articleUrl: 'https://css-tricks.com',
    },
    {
      id: 4,
      title: 'Web Performance Optimization',
      createdAt: '2 weeks ago',
      content: 'Techniques to improve your website loading time and overall performance metrics.',
      articleUrl: 'https://web.dev/performance',
    },
    {
      id: 5,
      title: 'Modern JavaScript Features',
      createdAt: '3 weeks ago',
      content:
        'Exploring ES2023 features and how they can improve your code quality and readability.',
      articleUrl: 'https://javascript.info',
    },
    {
      id: 6,
      title: 'Accessibility in Web Design',
      createdAt: '1 month ago',
      content: 'Essential practices for making your web applications accessible to everyone.',
      articleUrl: 'https://www.w3.org/WAI',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'Dan Abramov',
      createdAt: '2 hours ago',
      content:
        'Just pushed a new update to React DevTools. The performance profiler is now 10x faster!',
      avatarUrl: 'https://unavatar.io/twitter/dan_abramov',
    },
    {
      id: 2,
      title: 'Kent C. Dodds',
      createdAt: '5 hours ago',
      content:
        'Remember: Code is read more often than it is written. Write for humans, not machines.',
      avatarUrl: 'https://unavatar.io/twitter/kentcdodds',
    },
    {
      id: 3,
      title: 'Sarah Drasner',
      createdAt: '1 day ago',
      content:
        "CSS Grid changed my life. If you haven't tried it yet, drop everything and learn it now.",
      avatarUrl: 'https://unavatar.io/twitter/sarah_edo',
    },
    {
      id: 4,
      title: 'Wes Bos',
      createdAt: '2 days ago',
      content:
        "Hot tip: Use console.table() instead of console.log() for arrays and objects. You're welcome! 🔥",
      avatarUrl: 'https://unavatar.io/twitter/wesbos',
    },
    {
      id: 5,
      title: 'Addy Osmani',
      createdAt: '3 days ago',
      content:
        'Performance matters. A 1 second delay in page response can result in a 7% reduction in conversions.',
      avatarUrl: 'https://unavatar.io/twitter/addyosmani',
    },
    {
      id: 6,
      title: 'Lea Verou',
      createdAt: '1 week ago',
      content:
        "CSS has :has() now! This is the parent selector we've been waiting for years. Game changer!",
      avatarUrl: 'https://unavatar.io/twitter/leaverou',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
