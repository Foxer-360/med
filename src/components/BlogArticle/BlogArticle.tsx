import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Media from '../../partials/Media';

export interface AppProps {
  data: {
    text: string;
    title: string;
    image?: LooseObject;
    textAlign: string;
    isImageSquare: boolean;
  };
}

const BlogArticle = (props: AppProps) => {
  const { title, text, image, textAlign, isImageSquare } = props.data;

  return (
    <section className={'blogArticle'}>
      <div className="container">
        {title && <h1 className={'gradientHeading'}>{title}</h1>}

        {image && 
          <Media 
            data={image} 
            type="image"
            height={isImageSquare && '600'}
            classes={isImageSquare ? 'blogArticle--squareImage' : ''}
          />}

        <div className={`blogArticle__content ${textAlign || 'center'}`}>
          <ReactMarkdown
            source={text}
            renderers={{
              // tslint:disable-next-line:no-any
              paragraph: (rProps: any) => <p>{rProps.children}</p>,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;