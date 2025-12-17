import GridTemplate from 'templates/GridTemplate/GridTemplate';
import { useEffect } from 'react';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems as fetchItemsAction } from 'actions';

const Twitters = ({ twitters, fetchTwitters }) => {
  useEffect(() => {
    fetchTwitters();
  }, [fetchTwitters]);

  return (
    <GridTemplate>
      {twitters.map(({ _id, title, createdAt, content, twitterName, avatarUrl }) => (
        <Card
          key={_id}
          id={_id}
          title={title}
          createdAt={createdAt}
          content={content}
          twitterName={twitterName}
          avatarUrl={avatarUrl}
          cardType="twitters"
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItemsAction('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
