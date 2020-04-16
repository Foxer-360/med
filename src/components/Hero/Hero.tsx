import * as React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import getImageUrl from '../../helpers/getImageUrl';
import readEnvVariable from '../../helpers/readEnvVariable';
import LazyLoad from 'react-lazyload';
import Link from '../../partials/Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable('REACT_APP_MEDIA_LIBRARY_SERVER');

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

export interface HeroProps {
  data: {
    title: string;
    text: string;
    placeholder: string;
    displaySearch: boolean;
    image: LooseObject;
    displayOverlay: boolean;
    overlayColor: string;
    overlayOpacity: number;
    titleColor: string;
    textColor: string;
    blogSearchResults: LooseObject;
    doctorsLink?: LooseObject;
  };
  info: LooseObject;
}

export interface HeroState {
  src: string;
  loading: boolean;
}

class Hero extends React.Component<HeroProps, HeroState> {
  constructor(props: HeroProps) {
    super(props);

    this.state = {
      src: null,
      loading: true,
    };
  }

  createVariantIfDoesNotExist = () => {
    let sizes = {width: '' + Math.round(1920 * 1.5),
                height: '' + Math.round(650  * 1.5)};

    fetch(`${REACT_APP_MEDIA_LIBRARY_SERVER}/createDimension`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.data.image.id,
        width: parseInt(sizes.width, 10),
        height: parseInt(sizes.height, 10),
      }),
    })
      .then(response => {
        // this.getSizedUrl(this.props.data.image);
      })
      .catch(() => {
        console.log('There was an error creating variant');
      });
  }

  getSizedUrl = image => {
    const baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    let sizedUrl = null;
    let sizes = {width: Math.round(1920 * 1.5),
                height: Math.round(650 * 1.5)};

    this.setState({
      loading: true,
    });

    if (sizes && sizes.width && sizes.height && image && image.filename) {
      let filename = image.filename.split('.');
      filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
      filename = filename.join('.');
      
      sizedUrl = baseUrl + image.category + image.hash + '_' + filename;

      this.setState({
        src: sizedUrl,
      });
    } else {
      this.setState({
        src: getImageUrl(image),
      });
    }
  }

  loadImg(src: string) {
    if (src) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        this.setState({
          loading: false,
        });
      };

      img.onerror = err => {
        this.handleError();
      };
    }
  }

  componentDidMount() {
    this.getSizedUrl(this.props.data.image);
  }
  
  componentWillUpdate(nextProps: HeroProps, nextState: HeroState) {
    if (this.state.src !== nextState.src) {
      this.loadImg(nextState.src);
    }
    if (nextProps.data.image !== this.props.data.image) {
      this.getSizedUrl(nextProps);
    }
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();

    this.setState({
      loading: true,     
      src: getImageUrl(this.props.data.image),
    });
  }

  getLink = (data, slug) => {
    if (slug === undefined) {
      slug = '';
    }
    let link = `/${data.languageData && data.languageData.code}/${slug.trim()}`;
    return link;
  }

  getDoctorText = (text, textColor) => {
    text = text.split(' - ');
    let expertise = text ? text[0].split(' ! ') : '';
    let polyclinic = text ? text[1].split(' ! ') : '';
    let polyclinicNames = polyclinic ? polyclinic[0].split(', ') : '';
    let polyclinicsUrls = polyclinic ? polyclinic[1].split(',') : '';

    return (
      text && (
        <Query query={GET_CONTEXT}>
          {({ data }) => {
            let polyclinics = [];
            polyclinicNames.map(name => {
              polyclinics.push(
                polyclinicsUrls[polyclinicNames.indexOf(name)] ?
                  (
                    <React.Fragment>
                      <Link
                        url={this.getLink(data, polyclinicsUrls[polyclinicNames.indexOf(name)])}
                        className={'hero__text__link'}
                      >
                        {name.trim()}
                      </Link>
                    {polyclinicNames.indexOf(name) < (polyclinicNames.length - 1) ? ', ' : ''}
                    </React.Fragment>
                  ) :
                  name.trim()
                );
            });

            return (
              <div className={`hero__text hero__text--${textColor} `}>
                {expertise[1] ?
                  <Link url={this.getLink(data, expertise[1])} className={'hero__text__link'}>
                    {expertise[0].trim()}
                  </Link> :
                  expertise[0].trim()}
                {' - '}
                {polyclinics}
            </div>
            );
          }}
        </Query>
    ));
  }

  public render() {
    const { title, text, displaySearch, image, placeholder, displayOverlay, overlayColor, overlayOpacity,
      titleColor, textColor } = this.props.data;
    
    const BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;

    const hero = (
      <div className="fullWidthContainer">
        <section 
          className={'hero'}
          style={{ backgroundImage: image &&
          `url(${this.state.src ? this.state.src : getImageUrl(this.props.data.image)})` }}
        >
          {displayOverlay &&
          <div className={'hero__overlay'} style={{ background: overlayColor, opacity: (overlayOpacity / 100) }} />}
          <div className={'container'}>
            <div className={'hero__holder'}>
              {title && <h1 className={`hero__title hero__title--${titleColor}`}>{title}</h1>}

              {this.props.info 
              && this.props.info.datasources 
              && this.props.info.datasources.doctor 
              ? this.getDoctorText(text, textColor) 
              : text && <div className={`hero__text hero__text--${textColor} `}>{text}</div>}
  
              {displaySearch && (
                <SearchBar
                  barColor={'lightBlue'}
                  placeholder={placeholder ? placeholder : 'Hledat ...'}
                  blogSearchResults={this.props.data.blogSearchResults}
                  doctorsLink={this.props.data.doctorsLink}
                />
              )}
            </div>
          </div>
        </section>
      </div> 
    );

    return BACKOFFICE ? hero : <LazyLoad height={650} offset={'100'}>{hero}</LazyLoad>;
  }
}

export default Hero;