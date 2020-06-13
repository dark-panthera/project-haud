export class User {
    key;
    first_name;
    last_name;
    address_1;
    address_2;
    town;
    region;
    country;
    post_code;
    contact_number;

    constructor(key, first_name, last_name, address_1, address_2, town, region, country, post_code, contact_number) {
        this.key = key;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address_1 = address_1;
        this.address_2 = address_2;
        this.town = town;
        this.region = region;
        this.country = country;
        this.post_code = post_code;
        this.contact_number = contact_number;
    }
}
