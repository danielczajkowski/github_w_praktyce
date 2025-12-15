import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import { useMatch } from 'react-router-dom';
import { routes } from 'routes/routes';

const DetailsPage = () => {
  const isTwitter = useMatch(routes.twitter);
  const isNote = useMatch(routes.note);

  const currentPageType = isTwitter ? 'twitters' : isNote ? 'notes' : 'articles';

  const dummyDetails = {
    id: 1,
    title: 'title',
    createdAt: 'createdAt',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac viverra nunc. Integer porta risus neque, eget pretium massa aliquet eget. Phasellus at interdum magna. Nunc fringilla lacinia nulla sed molestie. Integer a elit eu mauris imperdiet vehicula ac in tellus. Integer porta sit amet massa lacinia molestie. In volutpat erat ipsum, eget accumsan dui suscipit sed. Vivamus neque purus, dignissim posuere mauris in, consequat elementum turpis. Nunc nec dapibus tortor. Sed iaculis justo nunc, nec semper ipsum congue efficitur. Sed id tortor scelerisque, lobortis mi et, aliquet libero. Nunc non hendrerit sapien. Sed viverra massa eget mattis mollis. Ut eu quam eget elit tincidunt pulvinar. Duis nibh arcu, rutrum in augue ac, lobortis mollis mi.',
    avatarUrl: 'https://unavatar.io/twitter/addyosmani',
    articleUrl: 'https://www.w3.org/WAI',
    twitterName: 'Addy Osmani',
  };

  return (
    <DetailsTemplate
      pageType={currentPageType}
      title={dummyDetails.title}
      createdAt={dummyDetails.createdAt}
      content={dummyDetails.content}
      avatarUrl={dummyDetails.avatarUrl}
      articleUrl={dummyDetails.articleUrl}
      twitterName={dummyDetails.twitterName}
    />
  );
};

export default DetailsPage;
