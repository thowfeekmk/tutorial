import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter, SplitterSide, SplitterContent, Page, Button} from 'react-onsenui';
import { WebView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  show() {
    this.setState({
      isOpen: true
    });
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          swipeable={true}>
          <Page>
            Menu content
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            <Button onClick={this.show.bind(this)}>Open</Button>
              <WebView
                originWhitelist={['*']}
                source={{ html: '<h1>Hello world</h1>' }}
              />
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
