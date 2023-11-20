export interface ISignUp {
    first_name: string;
    last_name: string;
    shop_name: string;
    seller_type: string;
    email: string;
    phone: string;
    account_type: string;
    password: string;
    password_confirmation: string;
    rep_first_name: string;
    rep_middle_name: string;
    rep_last_name: string;
    company_name: string;
    address: string;
    postal_code: string;
    company_phone: string;
    other_phone: string;
    cac_number: string;
    tax_number: string;
    shipping_address: string;
    cac_document: string;
    tax_document: string;
    id_document: string;
    account_number: string;
    bank_name: string;
    account_name: string;
}

export interface ISignUpCustomer {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
}