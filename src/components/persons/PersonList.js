import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import PersonRecord from "./PersonRecord";

class PersonList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList() {
        return this.props.users.map((user) => {

            return (
                <PersonRecord
                    first_name={user.first_name}
                    last_name={user.last_name}
                    address_1={user.address_1}
                    address_2={user.address_2}
                    town={user.town}
                    region={user.region}
                    country={user.country}
                    post_code={user.post_code}
                    contact_number={user.contact_number}
                    user_key={user.key}
                    key={user.key}
                />
            );
        });
    }

    render() {
        return (
            <div className="content-container-person">
                <h1>Person List</h1>

                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.crud.users),
    };
};

export default connect(mapStateToProps, { fetchUsers })(PersonList);
