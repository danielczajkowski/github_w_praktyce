import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const dummData = [
  {
    title: 'React Hooks Best Practices',
    createdAt: '1 day ago',
    content:
      'Discover the most effective patterns for using React Hooks in production applications.',
    articleUrl: 'https://react.dev/hooks',
  },
  {
    title: 'TypeScript Advanced Types',
    createdAt: '3 days ago',
    content:
      'Deep dive into advanced TypeScript types including conditional types and mapped types.',
    articleUrl: 'https://www.typescriptlang.org',
  },
  {
    title: 'CSS Grid vs Flexbox',
    createdAt: '1 week ago',
    content:
      'Understanding when to use CSS Grid and when Flexbox is the better choice for layouts.',
    articleUrl: 'https://css-tricks.com',
  },
  {
    title: 'Web Performance Optimization',
    createdAt: '2 weeks ago',
    content: 'Techniques to improve your website loading time and overall performance metrics.',
    articleUrl: 'https://web.dev/performance',
  },
  {
    title: 'Modern JavaScript Features',
    createdAt: '3 weeks ago',
    content:
      'Exploring ES2023 features and how they can improve your code quality and readability.',
    articleUrl: 'https://javascript.info',
  },
  {
    title: 'Accessibility in Web Design',
    createdAt: '1 month ago',
    content: 'Essential practices for making your web applications accessible to everyone.',
    articleUrl: 'https://www.w3.org/WAI',
  },
];

const Articles = () => (
  <UserPageTemplate pageType="article">
    {dummData.map((item, index) => (
      <Card key={index} {...item} cardType="article" />
    ))}
  </UserPageTemplate>
);

export default Articles;
