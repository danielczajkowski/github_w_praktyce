import ButtonIcon from './ButtonIcon';
import { theme } from 'theme/mainTheme';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import linkIcon from 'assets/icons/link.svg';

const decorators = [
  (Story) => (
    <div
      style={{
        padding: '1rem',
        backgroundColor: theme.color.notes,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '300px',
      }}
    >
      <Story />
    </div>
  ),
];

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  decorators,
  parameters: {
    backgrounds: {
      options: {
        note: { name: 'note', value: theme.color.notes },
        twitter: { name: 'twitter', value: theme.color.twitter },
        article: { name: 'article', value: theme.color.article },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'note' },
  },
  argTypes: {
    $active: {
      control: {
        type: 'boolean',
      },
    },
    $icon: {
      control: {
        type: 'select',
      },
      options: {
        Plus: plusIcon,
        Twitter: twitterIcon,
        Pen: penIcon,
        Logout: logoutIcon,
        Bulb: bulbIcon,
        Link: linkIcon,
      },
    },
  },
};

export default meta;

const Template = (args) => <ButtonIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  $icon: plusIcon,
  $active: true,
};
