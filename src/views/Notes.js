import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';
import { useEffect } from 'react';

const Notes = ({ notes, fetchNotes }) => {
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <GridTemplate>
      {notes.map(({ _id, title, createdAt, content }) => (
        <Card
          key={_id}
          id={_id}
          title={title}
          createdAt={createdAt}
          content={content}
          cardType="notes"
        />
      ))}
    </GridTemplate>
  );
};
const mapStateToProps = (state) => ({ notes: state.notes });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItemsAction('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
