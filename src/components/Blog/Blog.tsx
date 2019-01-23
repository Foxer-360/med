import * as React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard } from './components/blogCard';
import Button from '../../partials/Button';
import SearchBar from '../SearchBar/SearchBar';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { findFirst, findAll } from 'obj-traverse/lib/obj-traverse';

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

export interface BlogState {}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title, displaySearch } = this.props.data;

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1>{title}</h1>}

          {displaySearch && <SearchBar placeholder={'Vyhledat téma'} barColor={'gray'} />}

          <ComposedQuery>
            {({
              allPages: { data: allPagesData, loading: allPagesLoading, error: allPagesError },
              currentPage: { data: currentPageData, loading: currentPageLoading, error: currentPageError },
              getContext: { languageData },
            }) => {
              if (allPagesLoading || currentPageLoading || !allPagesData || !languageData) {
                return <div>Loading</div>;
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
                <Masonry
                  breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {articles.map((article, i) => this.mapArticleToContent(article, languageData.code, i))}
                </Masonry>
              );
            }}
          </ComposedQuery>

          <div className={'blog__blur'}>
            <div />
          </div>

          <div className="blog__btnHolder">
            <Button classes="btn--blueBkg btn--fullWidth">Načíst další</Button>
          </div>
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
        data: { perex, image, title: name },
      } = findFirst(content.content, 'content', { name: 'BlogArticle' });

      return (
        <BlogCard id={article.id} title={name} text={perex} key={index} color={'#386fa2'} img={image} special={false} />
      );
    }
    return <div />;
  }
}
