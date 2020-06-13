import { useState, useEffect } from "react";

export default (props) => {
    const [title, setTitle] = useState(null);
    
    useEffect(() => {
        if (props.match.params.id === undefined) {
            setTitle("add");
        } else {
            setTitle("update");
        }

    }, [props.match.params.id]);

    return title;
};
