
import { Page, Layout, EmptyState, Button, Card, TextField } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';




class Index extends React.Component {

  constructor(props) {
    super(props);
      this.state={
        // enter code here
        open: false,
        value: ''
       }
  }
  render() {
  
    return (
      <Page
        title="Product Selector"
        primaryAction={{
          content: 'Select Products',
          onAction: () => this.setState({ open: true }),
        }}

      >

        {/* <ResourcePicker
          resourceType="Product"
          open = {this.state.open}
          onCancel = {() => this.setState({ open: false })}
          onSelection = {(resources) => { this.handleSelection(resources) }}
          /> */}

        <TextField
          label="Email"
          value={this.state.value}
          onChange={(value) => { this.handleChange(value) }}
          autoComplete="on"
        />

      </Page>
    );
  }

  handleSelection = (resources) => {
    this.setState({ open: false });
    console.log(resources);
  };

  handleChange = (value) => {

    this.setState({ value: event.target.value });
    console.log(value);
  
  }

 

}

export default Index;
