/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ArticleDetailsPage from './ArticleDetailsPage';

const article: Article = {
  id: '1',
  title: 'Javascript News',
  subtitle: "What's New in JS for the Year 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'admin',
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Title of this block',
      paragraphs: [
        "The program, traditionally called 'Hello, world!', is very simple. It outputs a phrase like 'Hello, world!', or something similar, using the capabilities of a certain language.",
        "JavaScript is a language in which programs can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written any JS code yet and are reading this text in a browser on your desktop computer, you're just seconds away from your first JavaScript program.",
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Title of this block',
      paragraphs: [
        "The program, traditionally called 'Hello, world!', is very simple. It outputs a phrase like 'Hello, world!', or something similar, using the capabilities of a certain language.",
        'There are other ways to run JS code in the browser. Typically, when using JavaScript programs, they are loaded into the browser to enable the functioning of web pages. Usually, the code is formatted as separate files with the .js extension, which are then linked to web pages. However, you can also include program code directly in the page code. All of this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the w3school.com website.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Title of this block',
      paragraphs: [
        "JavaScript is a language in which programs can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written any JS code yet and are reading this text in a browser on your desktop computer, you're just seconds away from your first JavaScript program.",
        'There are other ways to run JS code in the browser. Typically, when using JavaScript programs, they are loaded into the browser to enable the functioning of web pages. Usually, the code is formatted as separate files with the .js extension, which are then linked to web pages. However, you can also include program code directly in the page code. All of this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on the w3school.com website.',
      ],
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Figure 1 - website screenshot',
    },
  ],
};

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
Light.decorators = [
  StoreDecorator({
    articleDetailsPage: {
      comments: {

      },
      recommendations: {},
    },
    articleDetails: {
      data: article,
    },
  }),
];

export const Dark: Story = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const Loading: Story = {};
Loading.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const Error: Story = {};
Error.decorators = [
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];
