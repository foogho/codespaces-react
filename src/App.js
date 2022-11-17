import { marked } from 'marked';
import React from 'react';

import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
import logo from './logo.svg';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedMarkdown: '',
      defaultMarkdown:
        '# My Heading \n## My Sub heading\n[project source code](https://github.com/foogho/markdown-previewer)\n`inline code`\n```\nfunction myFn(){\nconsole.log("Hello World")\n}\n```\n1. first item\n1. second item\n1. third item\n> this is a blockquote\n![react logo](' +
        logo +
        ')\n**bolded text**\n',
    };
    this.parseMarkdown = this.parseMarkdown.bind(this);
  }
  parseMarkdown(markdown) {
    this.setState({
      parsedMarkdown: marked.parse(markdown, { gfm: true, breaks: true }),
    });
  }
  render() {
    return (
      <div className="container">
        <Editor
          onMarkdownChange={this.parseMarkdown}
          defaultMarkdown={this.state.defaultMarkdown}
        />
        <Previewer content={this.state.parsedMarkdown} />
      </div>
    );
  }
}

export default App;
