import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const dummData = [
  {
    title: 'Shopping List',
    createdAt: '2 hours ago',
    content: "Buy groceries: milk, eggs, bread, coffee. Don't forget the cat food!",
  },
  {
    title: 'Project Ideas',
    createdAt: '1 day ago',
    content:
      'Build a personal finance tracker app using React and Firebase. Add charts for expenses.',
  },
  {
    title: 'Meeting Notes',
    createdAt: '3 days ago',
    content:
      'Discussed new feature roadmap. Priority: user authentication and dark mode implementation.',
  },
  {
    title: 'Book Recommendations',
    createdAt: '5 days ago',
    content:
      'Clean Code by Robert Martin, Refactoring by Martin Fowler, Design Patterns by Gang of Four.',
  },
  {
    title: 'Workout Plan',
    createdAt: '1 week ago',
    content:
      'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Legs, Friday: Core exercises.',
  },
  {
    title: 'Learning Goals',
    createdAt: '2 weeks ago',
    content: 'Master TypeScript generics, learn GraphQL basics, practice system design patterns.',
  },
  {
    title: 'Travel Plans',
    createdAt: '3 weeks ago',
    content:
      'Summer vacation to Croatia. Check flights, book accommodation in Split, plan island hopping.',
  },
];

const Notes = () => (
  <UserPageTemplate pageType="note">
    {dummData.map((item, index) => (
      <Card key={index} {...item} cardType="note" />
    ))}
  </UserPageTemplate>
);

export default Notes;
