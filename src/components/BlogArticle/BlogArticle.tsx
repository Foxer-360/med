import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';

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
    <section>
      {title && <h2>{title}</h2>}

      <Media data={image} type="image" />

      <ReactMarkdown
        source={text}
        renderers={{
          paragraph: (rProps: any) => <p>{rProps.children}</p>,
        }}
      />
    </section>
  );
};

export default BlogArticle;
