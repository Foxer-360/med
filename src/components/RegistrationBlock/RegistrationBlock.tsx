import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import Button from '../../partials/Button';
import getFileUrl from '../../helpers/getImageUrl';

export interface RegistrationBlockProps {
  data: {
    title: string;
    text: string;
    btnTitle: string;
    btnUrl?: LooseObject;
    conditionsFile?: LooseObject;
  };
}

const RegistrationBlock = (props: RegistrationBlockProps) => {
  const { title, text, btnTitle, btnUrl, conditionsFile } = props.data;

  return (
    <div className={'registration-block'}>
      <div className="container">
        {title && <h3>{title}</h3>}
        {text && <ReactMarkdown source={text} />}

        {btnTitle && btnUrl && btnUrl.url && btnUrl.url.length > 0 &&
          <div className={'registration-block__btn-holder'}>
            <Button url={btnUrl} classes={'btn--blueBorder'}>
              {btnTitle}
            </Button>
          </div>}

        {conditionsFile && conditionsFile.filename &&
          <a
            download={true}
            target={'_blank'}
            href={getFileUrl(conditionsFile)}
            className={'registration-block__conditions'}
          >
            Všeobecné obchodní podmínky
          </a>}
      </div>
    </div>
  );
};

export default RegistrationBlock;
