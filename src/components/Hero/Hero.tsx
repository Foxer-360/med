import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import getImageUrl from '../../helpers/getImageUrl';
export interface HeroProps {
  data: {
    title: string;
    text: string;
    displaySearch: boolean;
    image: LooseObject;
  };
}

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    const { title, text, displaySearch, image } = this.props.data;

    return (
      <div className="fullWidthContainer">
        <section className={'hero'} style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}>
          <div className={'container'}>
            <div className={'hero__holder'}>
              {title && <h1>{title}</h1>}

              {text && <div className={'hero__text'}>{text}</div>}

              {displaySearch && <SearchBar placeholder={'Hledám odbornost'} barColor={'lightBlue'} />}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
