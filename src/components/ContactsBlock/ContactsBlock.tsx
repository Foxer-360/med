import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ReactMarkdown from 'react-markdown';

interface ManagementContact {
  name: string;
  emails?: string;
  phones?: string;
  positions?: string;
}
interface NextContact {
  name: string;
  emails?: string;
  phones?: string;
  positions?: string;
}
interface OtherContact {
  name: string;
  emails?: string;
  phones?: string;
  positions?: string;
}

export interface ContactsBlockProps {
  data: {
    title: string;
    nextTitle: string;
    managementTitle: string;
    managementContacts: ManagementContact[];
    nextContacts: NextContact[];
    otherContacts: OtherContact[];
  };
}

const ContactsBlock = (props: ContactsBlockProps) => {
  const { 
    title,
    managementTitle,
    nextTitle,
    managementContacts,
    nextContacts,
    otherContacts
  } = props.data;

  return (
    <div className={'contacts-block'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}

        <div>
          {managementTitle && <h4>{managementTitle}</h4>}
          <div className={'grid contacts-block__main'}>
            
            {managementContacts && managementContacts.map((mContact, i) => (
              <div className={'contacts-block__main__element'} key={i}>
                {mContact.name && <p className={'contacts-block__name'}>{mContact.name}</p>}
                {mContact.positions && <p className={'contacts-block__position'}>{mContact.positions}</p>}
                {mContact.emails && <ReactMarkdown className={'contacts-block__email'} source={mContact.emails} />}
                {mContact.phones && <ReactMarkdown source={mContact.phones} />}
              </div>
            ))}

          </div>
        </div>

        <div>
          {nextTitle && <h4>{nextTitle}</h4>}
          <div className={'grid contacts-block__main'}>
            
            {nextContacts && nextContacts.map((nContact, i) => (
              <div className={'contacts-block__main__element'} key={i}>
                {nContact.name && <p className={'contacts-block__name'}>{nContact.name}</p>}
                {nContact.positions && <p className={'contacts-block__position'}>{nContact.positions}</p>}
                {nContact.emails && <ReactMarkdown className={'contacts-block__email'} source={nContact.emails} />}
                {nContact.phones && <ReactMarkdown source={nContact.phones} />}
              </div>
            ))}

          </div>
        </div>

        <DividerCircles />

        <div className={'grid contacts-block__list'}>
          
          {otherContacts && otherContacts.map((oContact, i) => (
            <div className={'contacts-block__main__element'} key={i}>
              {oContact.name && <p className={'contacts-block__name'}>{oContact.name}</p>}
              {oContact.positions && <p className={'contacts-block__position'}>{oContact.positions}</p>}
              {oContact.emails && <ReactMarkdown className={'contacts-block__email'} source={oContact.emails} />}
              {oContact.phones && <ReactMarkdown source={oContact.phones} />}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;