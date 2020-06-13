export const alphaNumericSymbolRegex = RegExp(/^[0-9a-zA-Z, .+]*$/);

export const alphabeticRegex = RegExp(/^[a-zA-Z]*$/);

export const alphaNumericRegex = RegExp(/^[0-9a-zA-Z ]*$/);

export const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        if (val.length === 0 && val === "") {
            valid = true;
        }
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
                contactNumber
    } = rest;



    // validate the form was filled out
    Object.values({
        firstName,
                lastName,
                address1,
                address2,
                town,
                region,
                country,
                postCode,
                contactNumber
    }).forEach((val) => {

        if (val === null || val === "") {
            valid = false;
        }
    });

    return valid;
};
