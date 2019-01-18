import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';
import { blogarticle } from '@source/services/components/resources';

export interface AppProps {
  data: {
    title: string;
    image?: LooseObject;
    text: string;
  };
}

const BlogArticle = (props: AppProps) => {
  const { title, text, image } = props.data;

  return (
    <section className={'blogArticle'}>
      <div className="container">
        {title && <h1 className={'gradientHeading'}>{title}</h1>}

        <Media data={image} type="image" />

        <div className={'blogArticle__content'}>
          <ReactMarkdown
            source={text}
            renderers={{
              paragraph: (rProps: any) => <p>{rProps.children}</p>,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
