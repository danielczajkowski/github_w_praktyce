import Sidebar from './Sidebar';

import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/notes']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Sidebar {...args} />;

export default meta;

export const Primary = Template.bind({});
