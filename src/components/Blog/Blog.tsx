import * as React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard } from './components/blogCard';
import Button from '../../partials/Button';
import SearchBar from '../SearchBar/SearchBar';

export interface BlogProps {
  data: {
    title: string;
    displaySearch: boolean;
  };
}

export interface BlogState {}

const data = {
  items: [
    {
      title: 'Těhotenství',
      text: 'Epilepsie při vhodné léčbě těhotenství nebrání',
      img: '/assets/medicon/images/blog.png',
      color: '#386fa2',
    },
    {
      title: 'Hledáme',
      text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
      img: '/assets/medicon/images/blog.png',
      color: '#d09d56',
      special: true,
    },

    {
      title: 'Věrnostní karta',
      text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
      img: '/assets/medicon/images/blog.png',
      color: '#d09d56',
    },
    {
      title: 'MAMMACENTRA',
      text: 'V našich čtyřech MAMMACENTRECH zdravotnický personál každý rok vyšetří na 50 000 žen.',
      img: '/assets/medicon/images/blog.png',
      color: '#4c959f',
    },
    { title: 'Home care', text: 'Pomáháme při domácí pěči', img: '/assets/medicon/images/blog.png', color: '#d3969f' },
    {
      title: 'in care',
      text: 'Nadstandartní zdravotní péče pro firmy i jednotlivce',
      img: '/assets/medicon/images/blog.png',
      color: '#386fa2',
    },
  ],
};

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

          <Masonry
            breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.items.map((item, index) => (
              <BlogCard
                title={item.title}
                text={item.text}
                key={index}
                color={item.color}
                img={item.img}
                special={item.special}
              />
            ))}
          </Masonry>

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
}
