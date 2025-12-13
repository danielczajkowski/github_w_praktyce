import Card from './Card';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    cardType: {
      control: {
        type: 'select',
      },
      options: ['note', 'twitter', 'article'],
    },
  },
};

export default meta;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardType: 'note',
};
