import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ id, title, createdAt, content, avatarUrl }) => (
      <Card
        key={id}
        id={id}
        title={title}
        createdAt={createdAt}
        content={content}
        avatarUrl={avatarUrl}
        cardType="twitters"
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => ({ twitters: state.twitters });

export default connect(mapStateToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
