import * as React from 'react';
import Media from '@source/partials/Media';

interface Contacts {
  title: string;
  image: LooseObject;
}

export interface ContactsProps {
  data: {
    contacts: Contacts[];
  };
}

const PolyclinicInfo = (props: ContactsProps) => {
  const { contacts } = props.data;

  return (
    <div className="policlinicInfo">

      {contacts && contacts.map((contact, index) => (
        // tslint:disable-next-line:no-unused-expression
        <Media 
          type={'background-image'} 
          classes={'policlinicInfo__item'}
          data={contact.image}
          key={index}
        >
          <p>{contact.title}</p>
        </Media>
      ))}
      
    </div>
  );
};

export default PolyclinicInfo;
