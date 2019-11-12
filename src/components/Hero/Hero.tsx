import * as React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import getImageUrl from '../../helpers/getImageUrl';
import Button from '../../partials/Button'

export interface HeroProps {
  data: {
    title: string;
    text: string;
    placeholder: string;
    displaySearch: boolean;
    image: LooseObject;
    imageSize: string;
    displayOverlay: boolean;
    overlayColor: string;
    overlayOpacity: number;
    titleColor: string;
    textColor: string;
    blogSearchResults: LooseObject;
    doctorsLink?: LooseObject;
    secondColumn: boolean;
    secondColumnBackground: string;
    title2: string;
    title2color: string;
    text2: string;
    text2color: string;
    button: boolean;
    buttonBackground: string;
    buttonBorder: string;
    buttonUrl: LooseObject;
    buttonText: string;
  };
}

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    const { title, text, displaySearch, image, imageSize, placeholder, displayOverlay, titleColor, textColor,
      overlayColor, overlayOpacity, secondColumn, secondColumnBackground, title2, title2color, text2, text2color,
    button, buttonBackground, buttonBorder, buttonUrl, buttonText } = this.props.data;

    return (
      <div className="fullWidthContainer">
        <section className={'hero' + (secondColumn ? ' row' : '')}>
          <div className={'hero_img' + (secondColumn ? ' col-md-6' : '')} style={{ backgroundImage: image && `url(${getImageUrl(image)})`,
        backgroundSize: imageSize }}>
            {displayOverlay && <div className={'hero__overlay'} style={{ background: overlayColor, opacity: overlayOpacity }} />}
            <div className={'hero__holder'}>
              {title && <h1 className={`hero__title hero__title--${titleColor}`}>{title}</h1>}

              {text && <div className={`hero__text hero__text--${textColor} `}>{text}</div>}

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
          {secondColumn &&
            <div className='hero_col2 col-md-6' style={{background: secondColumnBackground}}>
                {title && <h1 className={'hero__title'} style={{color: title2color}}>{title2}</h1>}

                {text && <div className={'hero__text'} style={{color: text2color}}>{text2}</div>}

                {button &&
                <div className='flexRow flexAlign--center'>
                <Button classes={'btn ' + buttonBackground + buttonBorder} url={buttonUrl && buttonUrl}>
                  {buttonText}
                </Button>
                </div>}
            </div>}
        </section>
      </div> 
    );
  }
}

export default Hero;