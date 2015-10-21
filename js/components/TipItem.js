import React, {PropTypes, Component} from 'react';
import marked from 'marked';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default class TipItem extends Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        </div>
      </div>
    );
  }
}
