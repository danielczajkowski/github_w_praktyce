import GridTemplate from 'templates/GridTemplate/GridTemplate';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems as fetchItemsAction } from 'actions';

const Articles = ({ articles, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <GridTemplate>
      {articles.map(({ _id, title, createdAt, content, articleUrl }) => (
        <Card
          key={_id}
          id={_id}
          title={title}
          createdAt={createdAt}
          content={content}
          articleUrl={articleUrl}
          cardType="articles"
        />
      ))}
    </GridTemplate>
  );
};
const mapStateToProps = (state) => ({ articles: state.articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItemsAction('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
