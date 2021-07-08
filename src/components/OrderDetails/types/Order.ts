export interface Customer {
    __typename: string;
    _id: string;
    name: string;
}

export interface Address {
    _id: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
    street: string;
}


export interface Payment {
    __typename: string;
    method: string;
    amount: number;
}

export interface Item {
    __typename: string;
    name: string;
    quantity: number;
    amount: number;
}

export interface Order {
    __typename: string;
    externalReference: string;
    store: string;
    customer: Customer;
    address: Address[];
    reference: number;
    amount: number;
    deliveryFee: number;
    payments: Payment[];
    items: Item[];
}