import * as React from 'react';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import { Query } from 'react-apollo';
import Masonry from 'react-masonry-css';
import { findFirst, findAll } from 'obj-traverse/lib/obj-traverse';

import List from '../List';
import Loader from '@source/partials/Loader';
import SearchBar from './components/SearchBar';
import { BlogCard } from './components/blogCard';

const GET_CONTEXT = gql`
  {
    pageData @client
    languageData @client
  }
`;

const GET_ALL_PAGES = gql`
  query localizedPages($languageId: ID!) {
    pages {
      id
      type {
        id
        name
      }
      tags {
        id
        name
      }
      translations(where: { language: { id: $languageId } }) {
        id
        name
        createdAt
        content
        language {
          id
          code
        }
      }
    }
  }
`;

const GET_PAGE = gql`
  query($pageId: ID!) {
    page(where: { id: $pageId }) {
      id
      tags {
        id
        name
      }
    }
  }
`;

const ComposedQuery = adopt({
  getContext: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,

  allPages: ({ render, getContext: { languageData } }) => {
    if (!languageData) {
      return render({ loading: true });
    }

    return (
      <div>
        <Query query={GET_ALL_PAGES} variables={{ languageId: languageData.id }}>
          {data => {
            return render(data);
          }}
        </Query>
      </div>
    );
  },
  currentPage: ({ render, getContext: { pageData } }) => (
    <Query query={GET_PAGE} variables={{ pageId: pageData.id }}>
      {data => {
        return render(data);
      }}
    </Query>
  ),
});

export interface BlogProps {
  languageCode?: string;
  data: {
    title: string;
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

  // tslint:disable-next-line:no-any
  onSearchChange = (e: any) => {
    this.setState({ searchQuery: e.target.value });
  }

  public render() {
    const { title, displaySearch } = this.props.data;

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1>{title}</h1>}

          {displaySearch && 
            <SearchBar 
              value={this.state.searchQuery}
              onChange={this.onSearchChange}
              placeholder={'Vyhledat'} 
              barColor={'gray'} 
            />}

          <ComposedQuery>
            {({
              allPages: { data: allPagesData, loading: allPagesLoading, error: allPagesError },
              currentPage: { data: currentPageData, loading: currentPageLoading, error: currentPageError },
              getContext: { languageData },
            }) => {
              if (allPagesLoading || currentPageLoading || !allPagesData || !languageData) {
                return <Loader />;
              }

              if (allPagesError) {
                return `Error...`;
              }
              const { pages } = allPagesData;
              const { page } = currentPageData;

              const articles = pages
                .filter(p => {
                  if (
                    !p.translations.find(
                      t =>
                        t.language.code === languageData.code &&
                        findAll(t.content, 'content', { name: 'BlogArticle' }).length > 0
                    )
                  ) {
                    return false;
                  }

                  if (!(p.translations && p.translations.length > 0)) {
                    return false;
                  }

                  if (page && p.id === page.id) {
                    return false;
                  }

                  return true;
                })
                // SORT ARTICLES BY DATE
                .sort((a, b) => {
                  a = a.translations[0].createdAt;
                  b = b.translations[0].createdAt;

                  return a > b ? -1 : a < b ? 1 : 0;
                });
              return (
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
                          {items.map((article, i) => 
                            this.mapArticleToContent(article, languageData.code, i))}
                        </Masonry>

                        <div className={'blog__blur'}>
                          <div />
                        </div>
                        
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
              );
            }}
          </ComposedQuery>
        </div>
      </section>
    );
  }

  private mapArticleToContent(article: LooseObject, languageCode: string, index: number) {
    const content = article.translations.find(t => t.language.code === languageCode || 'cs');

    const tags = article.tags;

    const blogArticleComponentData = findFirst(content.content, 'content', { name: 'BlogArticle' });

    if (blogArticleComponentData) {
      const {
        data: { text, perex, image, title: name },
      } = findFirst(content.content, 'content', { name: 'BlogArticle' });

      return (
        <BlogCard 
          id={article.id} 
          title={name} 
          text={`${text.slice(0, 35)} ..`}
          key={index} 
          color={'#386fa2'} 
          img={image} 
          special={false} 
        />
      );
    }
    return <div />;
  }
}
