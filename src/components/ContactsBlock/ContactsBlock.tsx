import * as React from 'react';
import DividerCircles from '../DividerCircles';

interface ManagementContact {
  name: string;
  position?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
}
interface NextContact {
  name: string;
  position?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
}
interface OtherContact {
  name: string;
  position?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
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
            
            {managementContacts && managementContacts.map((item, i) => (
              <div className={'contacts-block__main__element'} key={i}>
                <p className={'contacts-block__name'}>{item.name}</p>
                <p className={'contacts-block__position'}>{item.position}</p>
                {item.email1 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email1}`}>{item.email1}</a>
                  </p>
                }
                {item.email2 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email2}`}>{item.email2}</a>
                  </p>
                }
                {item.phone1 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone1}`}>tel.: {item.phone1}</a>
                  </p>
                }
                {item.phone2 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone2}`}>tel.: {item.phone2}</a>
                  </p>
                }
              </div>
            ))}

          </div>
        </div>

        <div>
          {nextTitle && <h4>{nextTitle}</h4>}
          <div className={'grid contacts-block__main'}>
            
            {nextContacts && nextContacts.map((item, i) => (
              <div className={'contacts-block__main__element'} key={i}>
                <p className={'contacts-block__name'}>{item.name}</p>
                <p className={'contacts-block__position'}>{item.position}</p>
                {item.email1 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email1}`}>{item.email1}</a>
                  </p>
                }
                {item.email2 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email2}`}>{item.email2}</a>
                  </p>
                }
                {item.phone1 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone1}`}>tel.: {item.phone1}</a>
                  </p>
                }
                {item.phone2 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone2}`}>tel.: {item.phone2}</a>
                  </p>
                }
              </div>
            ))}

          </div>
        </div>

        <DividerCircles />

        <div className={'grid contacts-block__list'}>
          
          {otherContacts && otherContacts.map((item, i) => (
            <div className={'contacts-block__main__element'} key={i}>
              <p className={'contacts-block__name'}>{item.name}</p>
              <p className={'contacts-block__position'}>{item.position}</p>
              {item.email1 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email1}`}>{item.email1}</a>
                  </p>
                }
                {item.email2 && 
                  <p>
                    <a className={'contacts-block__email'} href={`mailto:${item.email2}`}>{item.email2}</a>
                  </p>
                }
                {item.phone1 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone1}`}>tel.: {item.phone1}</a>
                  </p>
                }
                {item.phone2 &&
                  <p >
                    <a className={'contacts-block__email'} href={`tel:${item.phone2}`}>tel.: {item.phone2}</a>
                  </p>
                }
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
