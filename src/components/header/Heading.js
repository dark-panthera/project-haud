import React from "react";
import useHeading from "./use-heading";

const Heading = (props) => {
    const title = useHeading(props);

    const renderHeading = () => {
        let header = "";

        if (title === "add") {
            header = <h1>Add Person</h1>;
        } else if (title === "update") {
            header = <h1>Update Person</h1>;
        }
        return header;
    };

    return (
        renderHeading()
    )
}
export default Heading;