import { Component } from "react";

export class AddUserForm extends Component {

    state = {
        name: "",
        email: ""
    }

    handleChange = ({target:{name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handlSubmit = (event) => {
        event.preventDefault();
        this.props.addContact({ ...this.state });
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        const { name, email } = this.state;

        return (
            <form onSubmit={this.handlSubmit}>
                <label> Name
                    <input name="name" type="text" value={name} onChange={this.handleChange} />
                </label>
                <label>Email
                    <input name="email" type="email" value={email} onChange={this.handleChange} />
                </label>
                <button >Add</button>
            </form>
        )
    }
}