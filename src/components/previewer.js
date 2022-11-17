import React from 'react';

export default class Previewer extends React.Component {
  render() {
    return (
      <div className="card m-4">
        <div className="card-header">Previewer</div>
        <div className="card-body">
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          ></div>
        </div>
      </div>
    );
  }
}
