import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const dummData = [
  {
    title: 'Dan Abramov',
    createdAt: '2 hours ago',
    content:
      'Just pushed a new update to React DevTools. The performance profiler is now 10x faster!',
    avatarUrl: 'https://unavatar.io/twitter/dan_abramov',
  },
  {
    title: 'Kent C. Dodds',
    createdAt: '5 hours ago',
    content:
      'Remember: Code is read more often than it is written. Write for humans, not machines.',
    avatarUrl: 'https://unavatar.io/twitter/kentcdodds',
  },
  {
    title: 'Sarah Drasner',
    createdAt: '1 day ago',
    content:
      "CSS Grid changed my life. If you haven't tried it yet, drop everything and learn it now.",
    avatarUrl: 'https://unavatar.io/twitter/sarah_edo',
  },
  {
    title: 'Wes Bos',
    createdAt: '2 days ago',
    content:
      "Hot tip: Use console.table() instead of console.log() for arrays and objects. You're welcome! 🔥",
    avatarUrl: 'https://unavatar.io/twitter/wesbos',
  },
  {
    title: 'Addy Osmani',
    createdAt: '3 days ago',
    content:
      'Performance matters. A 1 second delay in page response can result in a 7% reduction in conversions.',
    avatarUrl: 'https://unavatar.io/twitter/addyosmani',
  },
  {
    title: 'Lea Verou',
    createdAt: '1 week ago',
    content:
      "CSS has :has() now! This is the parent selector we've been waiting for years. Game changer!",
    avatarUrl: 'https://unavatar.io/twitter/leaverou',
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {dummData.map((item, index) => (
      <Card key={index} {...item} cardType="twitter" />
    ))}
  </UserPageTemplate>
);

export default Twitters;
