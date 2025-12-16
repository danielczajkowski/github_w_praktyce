import React from 'react';
import Card from './Card';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

const dummyStore = createStore((state = [], action) => state);

const withRouter = (path) => (Story) => (
  <Provider store={dummyStore}>
    <MemoryRouter initialEntries={[path]}>
      <Story />
    </MemoryRouter>
  </Provider>
);

const meta = {
  title: 'Molecules/Card',
  component: Card,
};

export default meta;

const Template = (args) => <Card {...args} />;

export const Note = Template.bind({});
Note.decorators = [withRouter('/notes/1')];
Note.args = {
  id: 1,
  title: 'Sample Note',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  createdAt: '3 days ago',
};

export const Twitter = Template.bind({});
Twitter.decorators = [withRouter('/twitters/1')];
Twitter.args = {
  ...Note.args,
  title: 'Sample Twitter',
  avatarUrl: 'https://avatars.githubusercontent.com/u/123456?v=4',
};

export const Article = Template.bind({});
Article.decorators = [withRouter('/articles/1')];
Article.args = {
  ...Note.args,
  title: 'Sample Article',
  articleUrl: 'https://google.com',
};
