import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import getImageUrl from '../../helpers/getImageUrl';

export interface HeroProps {
  data: {
    title: string;
    text: string;
    placeholder: string;
    displaySearch: boolean;
    image: LooseObject;
    displayOverlay: boolean;
    titleColor: string;
    textColor: string;
    doctorSearchResults: LooseObject;
    blogSearchResults: LooseObject;
  };
}

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    const { title, text, displaySearch, image, placeholder, displayOverlay, titleColor, textColor } = this.props.data;

    return (
      <div className="fullWidthContainer">
        <section className={'hero'} style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}>
          {displayOverlay && <div className={'hero__overlay'} />}
          <div className={'container'}>
            <div className={'hero__holder'}>
              {title && <h1 className={`hero__title hero__title--${titleColor}`}>{title}</h1>}

              {text && <div className={`hero__text hero__text--${textColor} `}>{text}</div>}

              {displaySearch && (
                <SearchBar
                  placeholder={placeholder ? placeholder : 'Search..'}
                  barColor={'lightBlue'}
                  blogSearchResults={this.props.data.blogSearchResults}
                  doctorSearchResults={this.props.data.doctorSearchResults}
                />
              )}
            </div>
          </div>
        </section>
      </div> 
    );
  }
}

export default Hero;
