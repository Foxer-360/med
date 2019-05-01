import * as React from 'react';
import Masonry from 'react-masonry-css';

import List from '../List';
import SearchBar from './components/searchBar';
import { BlogCard } from './components/blogCard';

export interface BlogProps {
  languageCode?: string;
  data: {
    title: string;
    displaySearch: boolean;
    articles: any;
  };
}

export interface BlogState {
  numberOfPage: number;
  searchQuery: string;
}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
      searchQuery: ''
    };
  }

  onSearchChange = (e: any) => {
    this.setState({ searchQuery: e.target.value });
  }

  public render() {
    const { title, displaySearch, articles } = this.props.data;

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1 style={displaySearch ? { paddingBottom: 0 } : {}}>{title}</h1>}

          {displaySearch &&
            <SearchBar
              value={this.state.searchQuery}
              onChange={this.onSearchChange}
              placeholder={'Search'}
              barColor={'gray'}
            />}

          <List data={articles} searchedText={this.state.searchQuery}>
            {({ getPage }) => {
              const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 6);

              return (
                <>
                  <Masonry
                    breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {items.map((article, i) => (
                      <BlogCard
                        key={i}
                        url={article.url}
                        title={article.title}
                        text={`${
                          article.text && article.text.length > 35 
                          ? article.text.slice(0, 35) 
                          : article.text} ..
                        `}
                        color={'#386fa2'} 
                        img={article.image}
                        special={false}
                      />))}
                  </Masonry>

                  {this.state.numberOfPage < lastPage &&
                    <button
                      style={{ margin: '0 auto' }}
                      className={'btn btn--greenBkg btn--fullWidth'}
                      onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                    >
                      Načíst další
                    </button>}
                </>
              );
            }}
          </List>
        </div>
      </section>
    );
  }
}