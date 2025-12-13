import Button from './Button';
import { theme } from 'theme/mainTheme';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: {
        None: null,
        Primary: theme.color.note,
        Secondary: theme.color.twitter,
        Tertiary: theme.color.article,
      },
    },
  },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'close / save',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'remove',
  secondary: true,
};
