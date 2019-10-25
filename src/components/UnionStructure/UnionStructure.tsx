import * as React from 'react';
import Masonry from 'react-masonry-css';
import * as ReactMarkdown from 'react-markdown/with-html';

import List from '../List';

interface UnionItem {
  title: string;
  text: string;
}

export interface UnionStructureProps {
  data: {
    title: string;
    items: UnionItem[];
  };
}

function UnionStructure(props: UnionStructureProps) {
  const { title, items } = props.data;

  return (
    <div className="container">
      <div className="unionStructure">
        {title && <h3>{title}</h3>}

        <List data={items}>
          {({ data }) => (
            <Masonry
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
              breakpointCols={{ default: 3, 4000: 3, 993: 2, 769: 1 }}
            >
                {data && data.map((item, i) => (
                <div key={i} className="unionStructure__item">
                  <h5>{item.title}</h5>
                  <ReactMarkdown
                    skipHtml={false}
                    escapeHtml={false}
                    source={item.text}
                    className={'unionStructure__item__container'}
                  />
                </div>
              ))}
            </Masonry>
          )}
        </List>
      </div>
    </div>
  );
}

export default UnionStructure;