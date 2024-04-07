import { TiScissors } from "react-icons/ti";

export interface IPerson {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export class Person implements IPerson {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;

    constructor(person?: IPerson) {
        if (person) {
            this.id = person.id;
            this.title = person.title;
            this.firstName = person.firstName;
            this.lastName = person.lastName;
            this.picture = person.picture;
        } else {
            this.id = '';
            this.title = '';
            this.firstName = '';
            this.lastName = '';
            this.picture = '';
        }
    }
}

export interface UserFull extends IPerson{
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    location: Location;
}

export interface Location{
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}
export class LocationClass implements Location{
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
    constructor(location?: Location) {
        if(location){
            this.city = location.city;
            this.country = location.country;
            this.state = location.state;
            this.street = location.street;
            this.timezone = location.timezone;
        } else {
            this.city = '';
            this.country = '';
            this.state = '';
            this.street = '';
            this.timezone = '';
        }
    }
}
export class UserFullClass implements UserFull{
    dateOfBirth: string;
    email: string;
    firstName: string;
    gender: string;
    id: string;
    lastName: string;
    location: Location;
    phone: string;
    picture: string;
    registerDate: string;
    title: string;
    constructor(userfull?: UserFull) {
        if (userfull) {
            this.id = userfull.id;
            this.title = userfull.title;
            this.firstName = userfull.firstName;
            this.lastName = userfull.lastName;
            this.picture = userfull.picture;
            this.email = userfull.email;
            this.dateOfBirth = userfull.dateOfBirth;
            this.gender = userfull.gender;
            this.location = userfull.location;
            this.phone = userfull.phone;
            this.registerDate = userfull.registerDate;

        } else {
            this.id = '';
            this.title = '';
            this.firstName = '';
            this.lastName = '';
            this.picture = '';
            this.email = '';
            this.dateOfBirth = '';
            this.gender = '';
            this.location = new LocationClass();
            this.phone = '';
            this.registerDate = '';
        }
    }
    
}


