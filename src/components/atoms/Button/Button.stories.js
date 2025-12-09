import Button from './Button';

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
        Primary: 'hsl(49, 100%, 58%)',
        Secondary: 'hsl(196, 83%, 75%)',
        Tertiary: 'hsl(106, 47%, 64%)',
      },
    },
  },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  secondary: true,
};
