import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map(({ id, title, createdAt, content }) => (
      <Card
        key={id}
        id={id}
        title={title}
        createdAt={createdAt}
        content={content}
        cardType="notes"
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => ({ notes: state.notes });

export default connect(mapStateToProps)(Notes);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
