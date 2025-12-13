import Paragraph from './Paragraph';

const meta = {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export default meta;

const Template = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
