import NewItemBar from './NewItemBar';

import { MemoryRouter } from 'react-router-dom';

const withRouter = (path) => (Story) => (
  <MemoryRouter initialEntries={[path]}>
    <Story />
  </MemoryRouter>
);

const meta = {
  title: 'Organisms/NewItemBar',
  component: NewItemBar,
};

const Template = (args) => <NewItemBar {...args} />;

export default meta;

export const Notes = Template.bind({});
Notes.decorators = [withRouter('/notes')];
Notes.args = { isVisible: true };

export const Twitters = Template.bind({});
Twitters.decorators = [withRouter('/twitters')];
Twitters.args = { isVisible: true };

export const Articles = Template.bind({});
Articles.decorators = [withRouter('/articles')];
Articles.args = { isVisible: true };
