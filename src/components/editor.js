import React from 'react';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // on initial load textarea onChange event doesn't raise so we should
    // manually call onMarkdownChange callback
    this.props.onMarkdownChange(this.props.defaultMarkdown);
  }
  render() {
    return (
      <div className="card m-4">
        <div className="card-header">Editor</div>
        <div className="card-body">
          <h5 className="card-title">Write down your markdown</h5>
          <textarea
            id="editor"
            className="form-control"
            rows="10"
            defaultValue={this.props.defaultMarkdown}
            onChange={(e) => {
              this.props.onMarkdownChange(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    );
  }
}
