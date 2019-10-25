import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import List from '../List';
import DividerCircles from '../DividerCircles';

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
          <div className={'contacts-block__main row'}>

            <List data={managementContacts}>
              {({ data }) => data && data.map((mContact, i) => (
                <div className={'contacts-block__main__element col-sm-12 col-md-6 col-lg-3'} key={i}>
                  {mContact.name && <p className={'contacts-block__name'}>{mContact.name}</p>}
                  {mContact.positions && <p className={'contacts-block__position'}>{mContact.positions}</p>}
                  {mContact.emails && <ReactMarkdown
                    skipHtml={false}
                    escapeHtml={false}
                    className={'contacts-block__email'}
                    source={mContact.emails}
                  />}
                  {mContact.phones && <ReactMarkdown
                    skipHtml={false}
                    escapeHtml={false}
                    source={mContact.phones}
                  />}
                </div>
              ))}
            </List>

          </div>
        </div>

        <div>
          {nextTitle && <h4>{nextTitle}</h4>}
          <div className={'contacts-block__main row'}>
            <List data={nextContacts}>
              {({ data }) => data && data.map((nContact, i) => (
                <div className={'contacts-block__main__element col-sm-12 col-md-6 col-lg-3'} key={i}>
                  {nContact.name && <p className={'contacts-block__name'}>{nContact.name}</p>}
                  {nContact.positions && <p className={'contacts-block__position'}>{nContact.positions}</p>}
                  {nContact.emails && <ReactMarkdown
                    className={'contacts-block__email'}
                    skipHtml={false}
                    escapeHtml={false}
                    source={nContact.emails}
                  />}
                  {nContact.phones && <ReactMarkdown
                    skipHtml={false}
                    escapeHtml={false}
                    source={nContact.phones}
                  />}
                </div>
              ))}
            </List>
          </div>
        </div>

        <DividerCircles />

        <div className={'contacts-block__main row'}>

          <List data={otherContacts}>
          {({ data }) => data && data.map((oContact, i) => (
            <div className={'contacts-block__main__element col-sm-12 col-md-6 col-lg-3'} key={i}>
              {oContact.name && <p className={'contacts-block__name'}>{oContact.name}</p>}
              {oContact.positions && <p className={'contacts-block__position'}>{oContact.positions}</p>}
              {oContact.emails && <ReactMarkdown
                className={'contacts-block__email'}
                skipHtml={false}
                escapeHtml={false}
                source={oContact.emails}
              />}
              {oContact.phones && <ReactMarkdown
                skipHtml={false}
                escapeHtml={false}
                source={oContact.phones}
              />}
            </div>
          ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;