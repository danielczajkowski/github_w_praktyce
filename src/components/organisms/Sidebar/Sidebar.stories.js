import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    cardType: {
      control: 'select',
      options: ['note', 'twitter', 'article'],
    },
  },
};

const Template = (args) => <Sidebar {...args} />;

export default meta;

export const Primary = Template.bind({});
Primary.args = { cardType: 'note' };
