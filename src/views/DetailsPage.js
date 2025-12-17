import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import { usePageType } from 'hooks/usePageType';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchSingleItem as fetchSingleItemAction } from 'actions';
import { useParams } from 'react-router-dom';

const DetailsPage = ({ fetchSingleItem, singleItem }) => {
  const pageType = usePageType();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleItem(id);
  }, [fetchSingleItem, id]);

  return (
    <UserPageTemplate pageType={pageType}>
      {singleItem ? (
        <DetailsTemplate
          pageType={pageType}
          title={singleItem.title}
          createdAt={singleItem.createdAt}
          content={singleItem.content}
          avatarUrl={singleItem.avatarUrl}
          articleUrl={singleItem.articleUrl}
          twitterName={singleItem.twitterName}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </UserPageTemplate>
  );
};

const mapStateToProps = ({ singleItem }) => ({
  singleItem,
});

export default connect(mapStateToProps, { fetchSingleItem: fetchSingleItemAction })(DetailsPage);
