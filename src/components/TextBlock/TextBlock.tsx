import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export interface TextBlockProps {
  data: {
    title?: string;
    text?: string;
    textAlign?: string;
  };
}

const TextBlock = (props: TextBlockProps) => {
  const { title, text, textAlign } = props.data;

  return (
    <section className={'textBlock'}>
      <div className="container">
        <div className={'textBlock__container'}>
          {title && <h3 className={'gradientHeading'}>{title}</h3>}

          {text && (
            <div className={`textBlock__container__text ${textAlign}`}>
              <ReactMarkdown
                source={text}
                renderers={{
                  paragraph: (rProps: any) => <>{rProps.children}</>,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
