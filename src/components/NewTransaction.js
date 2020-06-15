import React from 'react';
import { InputNumber, Input } from 'antd';
import { connect } from 'react-redux';
import { addTransaction } from '../store/actions/actions';

class NewTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      name: ''
    };
  }

  handleInputChange = (value, name) => {
    if (name === "amount") {
      this.setState({
        [name]: value
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    let amount = this.state.amount;
    this.props.dispatch(addTransaction(name, amount));
    this.setState({ name: '', amount: 0 })
  }

  render() {
    return (
      <div style={{ padding: '30px' }}>
        <h3 >Nowa transakcja:</h3>
        <form>
          <label>
            Nazwa:
            <Input
              style={{ width: '200px', margin: '10px' }}
              value={this.state.name}
              onChange={(value) => this.handleInputChange(value.target.value, "name")}
            />
          </label>
          <br>
          </br>
          <label>
            Kwota:
            <InputNumber
              min={0}
              step={0.01}
              style={{ width: '100px', margin: '10px' }}
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={(value) => this.handleInputChange(value, "amount")}
              autoFocus={false}
            />
              EUR
          </label>
          <br>
          </br>
          <button type="button" style={{ width: '100px', margin: '10px' }} onClick={this.handleSubmit}>OK</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTransaction);
