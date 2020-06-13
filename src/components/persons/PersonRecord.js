import React from "react";
import personImage from '../../images/women-01.jpg';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../../actions";

const personRecord = (props) => (
    <div className="content-container-person">
        <div className="person-gallery">
            <img src={personImage} alt="icon" className="image img" />

            <div className="first_name">
                <div className="font--primary">First Name</div>
                <div>{props.first_name}</div>
            </div>
            <div className="last_name">
                <div className="font--primary">Last Name</div>
                <div>{props.last_name}</div>
            </div>
            <div className="address_1">
                <div className="font--primary">Address 1</div>
                <div>{props.address_1}</div>
            </div>
            
            <div className="address_2">
                <div className="font--primary">Address 2</div>
                <div>{props.address_2}</div>
            </div>
            <div className="town">
                <div className="font--primary">Town</div>
                <div>{props.town}</div>
            </div>
            <div className="region">
                <div className="font--primary">Region</div>
                <div>{props.region}</div>
            </div>
            <div className="country">
                <div className="font--primary">Country</div>
                <div>{props.country}</div>
            </div>
            <div className="post_code">
                <div className="font--primary">Post Code</div>
                <div>{props.post_code}</div>
            </div>
            <div className="contact_number">
                <div className="font--primary">Contact Number</div>
                <div>{props.contact_number}</div>
            </div>
            
            <div className="row">
                <div className="grid--actions">
                    <div className="space">
                        <Link to={`/edit/${props.user_key}`} className="fa fa-pencil font--secondary"></Link>
                    </div>
                    <div>
                        <span className="fa fa-trash font--secondary" onClick={() => props.deleteUser(props.user_key)}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default connect(null, { deleteUser })(personRecord);
