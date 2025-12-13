import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    $search: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type something...',
  $search: false,
};
