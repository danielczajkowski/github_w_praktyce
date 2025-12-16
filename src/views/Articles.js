import GridTemplate from 'templates/GridTemplate/GridTemplate';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(({ id, title, createdAt, content, articleUrl }) => (
      <Card
        key={id}
        id={id}
        title={title}
        createdAt={createdAt}
        content={content}
        articleUrl={articleUrl}
        cardType="articles"
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
