import * as React from 'react';
import Masonry from 'react-masonry-css';
import * as ReactMarkdown from 'react-markdown/with-html';

import List from '../List';
import SearchBar from './components/searchBar';
import { BlogCard } from './components/blogCard';

export interface BlogProps {
  languageCode?: string;
  data: {
    articles: any;
    title: string;
    specialText: string;
    specialTitle: string;
    displaySearch: boolean;
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

  renderBlogCards(items: any) {
    if (!items) { return []; }
  
    const { specialText, specialTitle } = this.props.data;
    let resultBlogCards = [];
    
    for (let i = 0; i < items.length; i++) {
      if (i === 1 && specialText && specialTitle) {
        resultBlogCards.push(
          <div key={'special'} className={'blogCard blogCard--special'}>
            <h3>{specialTitle}</h3>
            <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={specialText}
              renderers={{
                // tslint:disable-next-line:no-any
                paragraph: (rProps: any) => <p>{rProps.children}</p>,
              }}
            />
          </div>
        );
      }
      
      resultBlogCards.push((
        <BlogCard
          key={i}
          url={items[i].url}
          text={items[i].text}
          img={items[i].image}
          title={items[i].title}
          color={
            items[i].color 
            && items[i].color.trim().length > 0 
            ? items[i].color : '#386fa2'
          }
        />
      ));
    }

    return resultBlogCards;
  }

  public render() {
    const {
      title,
      articles,
      displaySearch
    } = this.props.data;

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1 style={displaySearch ? { paddingBottom: 0 } : {}}>{title}</h1>}

          {displaySearch &&
            <SearchBar
              barColor={'gray'}
              placeholder={'Hledat'}
              value={this.state.searchQuery}
              onChange={this.onSearchChange}
            />}

          <List data={articles} searchedText={this.state.searchQuery}>
            {({ getPage }) => {
              const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 6);

              if (items && items.length <= 0) {
                return <div className={'searchBarResults__noResults'}>Bohužel nebyl nalezen žádný článek.</div>;
              }
              
              return (
                <>
                  <Masonry
                    breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {this.renderBlogCards(items)}
                  </Masonry>

                  {this.state.numberOfPage < lastPage &&
                    <button
                      style={{ margin: '0 auto' }}
                      className={'btn btn--blueBkg btn--fullWidth'}
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