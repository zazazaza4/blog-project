/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import {
  Article, ArticleBlockType, ArticleType, ArticleView,
} from '../../model/types/article';
import { ArticleList } from './ArticleList';

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

const articles = [article, article, article, article, article, article];

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  argTypes: {},
  args: { articles },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallLight: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const SmallDark: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigLight: Story = {
  args: {
    view: ArticleView.BIG,
  },
};

export const BigDark: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
BigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading: Story = {
  args: {
    articles: [],
    isLoading: true,
  },
};
