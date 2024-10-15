import React, { createRef } from "react";
import { Configuration } from "../../Configuration";

export interface Country {
    iso3: string;
    name: string;
}

export interface Scope {
    isIcUser?: boolean;
    isSgGroupContact?: boolean;
    isInternal?: boolean;
}

export interface Contact {
    id?: string;
    jobTitle?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    team?: string;
    email?: string;
    scope?: Scope;
    isPepOrSpo?: boolean;
    country?: Country;
    icId: string;
    bdrCommercialId: string;
    bdrLegalId: string;
    name?: string;
    bdrCommercialLevel?: string;
    bdrLegalLevel?: string;
    bdrMnemonic?: string; // Fixed typo
    rctId?: string;
    igg: string;
}

interface IProps {
    onChange(contacts: Contact[]): void;
    controlId?: string;
}

class ContactsPickerComponent extends React.Component<IProps> {
    private contactPicker = createRef<any>(); 

    constructor(props: IProps) {
        super(props);
       this.contactsPicker = React.createRef();
       this.onContactsPickerChanges = this.onContactsPickerChanges.bind(this);
    }

    async onContactsPickerChanges(event: any) {
        event.detail?.contacts?.map(async (c: Contact) => {
            const res = await axios.get(`${window.env.CONTACT_API_ENDPOINT}${c.id}`);
            c.igg = res.data.igg;
        });
       

        this.props.onChange(event.detail.contacts);
    }

    componentDidMount() {
        this.contactPicker.current.addEventListener(
            'ic-sgb4-simple-contact-picker--changed',
            this.onContactsPickerChanges,
        );
    }

    componentWillUnmount() {
        this.contactPicker.current.removeEventListener(
            'ic-sgb4-simple-contact-picker--changed',
            this.onContactsPickerChanges,
        );
    }

    render() {
        return (
            <ic-sgb4-simple-contact-picker
                id={contacts_picker}
                sso-v2="true"
                display-option="email"
                ref={this.contactPicker}
                placeholder={this.props.placholder}
                internal-only={true}
            >
            </ic-sgb4-simple-contact-picker>
        );
    }
}

export default ContactsPickerComponent;
