import React from "react";

export default class LinkForm extends React.Component {
  state = {
    url: "",
    name: "",
    description: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addOrEditLink(this.state);
    this.setState({ url: "", name: "", description: "" });
  };
  render() {
    return (
      <form
        className="card card-body border-primary"
  
        onSubmit={this.handleSubmit}
      >
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">insert_link</i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="https://someurl.com"
            name="url"
            onChange={this.handleChange.bind(this)}
            value={this.state.url}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Website Name"
            onChange={this.handleChange.bind(this)}
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            rows="3"
            className="form-control"
            placeholder="Write a Decription"
            onChange={this.handleChange.bind(this)}
            value={this.state.description}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-block">Submit</button>
      </form>
    );
  }
}
