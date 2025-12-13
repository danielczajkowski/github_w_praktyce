import Heading from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    big: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  big: true,
};
