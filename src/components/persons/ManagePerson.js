import React, { Component } from "react";
import {
    alphabeticRegex,
    alphaNumericRegex,
    alphaNumericSymbolRegex,
    formValid,
} from "../validations/Validations";
import Heading from "../header/Heading";
import { createUser, fetchUser, editUser } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";

class ManagePerson extends Component {
    state = {
        isFormValid: true,
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        town: "",
        region: "",
        country: "",
        postCode: "",
        contactNumber: "",
        key: "",
        formErrors: {
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            town: "",
            region: "",
            country: "",
            postCode: "",
            contactNumber: "",
            key: "",
        },
    };

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            this.props.fetchUser(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            const {
                first_name,
                last_name,
                address_1,
                address_2,
                town,
                region,
                country,
                post_code,
                contact_number,
            } = nextProps.user;

            this.setState({
                firstName: first_name,
                lastName: last_name,
                address1: address_1,
                address2: address_2,
                town: town,
                region: region,
                country: country,
                postCode: post_code,
                contactNumber: contact_number,
                key: this.props.match.params.id,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            
            this.setState({
                isFormValid: true,
            });

            const {
                firstName,
                lastName,
                address1,
                address2,
                town,
                region,
                country,
                postCode,
                contactNumber,
            } = this.state;

            if (!this.props.match.params.id) {
                this.props.createUser({
                    first_name: firstName,
                    last_name: lastName,
                    address_1: address1,
                    address_2: address2,
                    town,
                    region,
                    country,
                    post_code: postCode,
                    contact_number: contactNumber,
                });
            } else {
                this.props.editUser(
                    this.props.match.params.id,
                    {
                        first_name: firstName,
                        last_name: lastName,
                        address_1: address1,
                        address_2: address2,
                        town,
                        region,
                        country,
                        post_code: postCode,
                        contact_number: contactNumber,
                    }
                )
            }
        } else {
            this.setState({
                isFormValid: false,
            });
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName = alphabeticRegex.test(value)
                    ? ""
                    : "Only Characters are allowed!";

                if (formErrors.firstName === "") {
                    formErrors.firstName =
                        value.length < 3 || value.length > 50
                            ? "characters between 3 and 50 are required"
                            : "";
                }
                break;
            case "lastName":
                formErrors.lastName = alphabeticRegex.test(value)
                    ? ""
                    : "Only Characters are allowed!";

                if (formErrors.lastName === "") {
                    formErrors.lastName =
                        value.length < 3 || value.length > 50
                            ? "characters between 3 and 50 are required"
                            : "";
                }
                break;
            case "address1":
                formErrors.address1 =
                    value.length < 1 || value.length > 120
                        ? "characters between 5 and 120 are required"
                        : "";

                if (formErrors.address1 === "") {
                    formErrors.address1 = alphaNumericSymbolRegex.test(value)
                        ? ""
                        : "Invalid Address 1";
                }
                break;
            case "address2":
                formErrors.address2 =
                    value.length < 1 || value.length > 120
                        ? "characters between 5 and 120 are required"
                        : "";

                if (formErrors.address2 === "") {
                    formErrors.address2 = alphaNumericSymbolRegex.test(value)
                        ? ""
                        : "Invalid Address 2";
                }
                break;
            case "town":
                formErrors.town =
                    value.length < 1 || value.length > 50
                        ? "characters between 1 and 50 are required"
                        : "";

                if (formErrors.town === "") {
                    formErrors.town = alphaNumericSymbolRegex.test(value)
                        ? ""
                        : "Enter a valid Town!";
                }
                break;
            case "region":
                formErrors.region =
                    value.length < 1 || value.length > 50
                        ? "characters between 1 and 50 are required"
                        : "";

                if (formErrors.region === "") {
                    formErrors.region = alphaNumericSymbolRegex.test(value)
                        ? ""
                        : "Enter a valid Region!";
                }
                break;
            case "country":
                formErrors.country =
                    value.length < 1 || value.length > 50
                        ? "characters between 1 and 50 are required"
                        : "";

                if (formErrors.country === "") {
                    formErrors.country = alphabeticRegex.test(value)
                        ? ""
                        : "Only Alphabets are allowed!";
                }
                break;
            case "postCode":
                formErrors.postCode =
                    value.length < 1 || value.length > 10 ? "maximum 10 characters" : "";

                if (formErrors.postCode === "") {
                    formErrors.postCode = alphaNumericRegex.test(value)
                        ? ""
                        : "Only Alphabets and numbers are allowed!";
                }
                break;
            case "contactNumber":
                formErrors.contactNumber =
                    value.length < 1 || value.length > 50 ? "maximum 50 characters" : "";

                if (formErrors.contactNumber === "") {
                    formErrors.contactNumber = alphaNumericSymbolRegex.test(value)
                        ? ""
                        : "Enter a valid contact number!";
                }
                break;
            default:
                break;
        }

        this.setState({
            formErrors,
            [name]: value,
        });
    };

    handleFocus = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        let tempValue = "";

        if (value.length === 0) {
            formErrors[name] = "Field is required";

            this.setState({
                formErrors,
                [name]: tempValue,
            });
        }
    };

    onReset = (e) => {
        e.preventDefault();

        this.setState({
            isFormValid: true,
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            town: "",
            region: "",
            country: "",
            postCode: "",
            contactNumber: "",
            key: "",
            formErrors: {
                firstName: "",
                lastName: "",
                address1: "",
                address2: "",
                town: "",
                region: "",
                country: "",
                postCode: "",
                contactNumber: "",
                key: "",
            },
        });
    };

    onCancel = (e) => {
        e.preventDefault();

        history.push('/');
    };

    renderSubmit = () => {
        let button = "";

        if (this.props.match.params.id) {
            button = <button className="btn primary">Update</button>
        } else {
            button = <button className="btn primary">Insert</button>
        }

        return button;
    }

    render() {
        const {
            isFormValid,
            formErrors,
            firstName,
            lastName,
            address1,
            address2,
            town,
            region,
            country,
            postCode,
            contactNumber,
        } = this.state;

        return (
            <div className="content-container">
                <Heading {...this.props} />

                <form onSubmit={this.handleSubmit} className="ui form error">
                    <div className="group">
                        <label>First Name</label>
                        <input
                            name="firstName"
                            className="input"
                            autoComplete="off"
                            placeholder="First Name"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={firstName || ""}
                            maxLength={50}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="font--danger">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Last Name</label>
                        <input
                            name="lastName"
                            className="input"
                            autoComplete="off"
                            placeholder="Last Name"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={lastName || ""}
                            maxLength={50}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="font--danger">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Address 1</label>
                        <input
                            name="address1"
                            className="input"
                            autoComplete="off"
                            placeholder="Address 1"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={address1 || ""}
                            maxLength={120}
                        />
                        {formErrors.address1.length > 0 && (
                            <span className="font--danger">{formErrors.address1}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Address 2</label>
                        <input
                            name="address2"
                            className="input"
                            autoComplete="off"
                            placeholder="Address 2"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={address2 || ""}
                            maxLength={120}
                        />
                        {formErrors.address2.length > 0 && (
                            <span className="font--danger">{formErrors.address2}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Town</label>
                        <input
                            name="town"
                            className="input"
                            autoComplete="off"
                            placeholder="Town"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={town || ""}
                            maxLength={50}
                        />
                        {formErrors.town.length > 0 && (
                            <span className="font--danger">{formErrors.town}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Region</label>
                        <input
                            name="region"
                            className="input"
                            autoComplete="off"
                            placeholder="Region"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={region || ""}
                            maxLength={50}
                        />
                        {formErrors.region.length > 0 && (
                            <span className="font--danger">{formErrors.region}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Country</label>
                        <input
                            name="country"
                            className="input"
                            autoComplete="off"
                            placeholder="Country"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={country || ""}
                            maxLength={50}
                        />
                        {formErrors.country.length > 0 && (
                            <span className="font--danger">{formErrors.country}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Post Code</label>
                        <input
                            name="postCode"
                            className="input"
                            autoComplete="off"
                            placeholder="Post Code"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={postCode || ""}
                            maxLength={10}
                        />
                        {formErrors.postCode.length > 0 && (
                            <span className="font--danger">{formErrors.postCode}</span>
                        )}
                    </div>
                    <div className="group">
                        <label>Contact Number</label>
                        <input
                            name="contactNumber"
                            className="input"
                            autoComplete="off"
                            placeholder="Contact Number"
                            noValidate
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={contactNumber || ""}
                            maxLength={50}
                        />
                        {formErrors.contactNumber.length > 0 && (
                            <span className="font--danger">{formErrors.contactNumber}</span>
                        )}
                    </div>
                    <div className="group btn-container">
                        {this.renderSubmit()}
                        <button
                            type="button"
                            className="btn warning"
                            onClick={this.onReset}
                        >
                            Reset
                        </button>
                        <button
                        type="button"
                        className="btn danger"
                        onClick={this.onCancel}
                    >
                        Cancel
                    </button>
                    </div>
                    <div className="group btn-container">
                        {!isFormValid && (
                            <span className="font--danger">Form is not valid</span>
                        )}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    user: state.crud.user,
});

export default connect(mapStateToProps, { createUser, fetchUser, editUser })(
    ManagePerson
);
