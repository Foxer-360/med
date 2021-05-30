import * as React from 'react';
import LazyLoad from 'react-lazyload';

import ImgWithFallback from './components/ImgWithFallback';

export interface MediaProps {
  type: string;
  width?: string;
  height?: string;
  classes?: string;
  // tslint:disable:no-any
  data: any;
  nowrapper?: boolean;
}

export interface MediaState {}

class Media extends React.Component<MediaProps, MediaState> {
  constructor(props: MediaProps) {
    super(props);
  }

  setDimensions = () => {
    if (!(this.props.width || this.props.height)) { return; }
    
    let result = null;
    result = {
      width: this.props.width && this.props.width,
      height: this.props.height && this.props.height
    };

    return result;
  }

  renderAsImage = data => {
    const baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

    if (data && data.filename) {
      let recommendedSizes = (data && data.recommendedSizes) || null;
      let originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;

      recommendedSizes = this.setDimensions();
      
      return (
          <ImgWithFallback
            originalSrc={originalUrl}
            alt={data.alt || ''}
            baseUrl={baseUrl}
            recommendedSizes={recommendedSizes}
            originalData={data}
            hash={data.hash}
            classes={this.props.classes}
            nowrapper={this.props.nowrapper}
          />
      );
    } else {
      return null;
    }
  }

  renderAsVideoEmbed(data: any) {
    let embedUrl = data.url;

    return (
      <div
        className={'mediaRatio'}
        style={{
          paddingTop: `${(parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
            parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
            100}%`,
        }}
      >
        <iframe className="mediaEmbeddedVideo inner" src={embedUrl} allowFullScreen={true} frameBorder="0" />
      </div>
    );
  }

  render() {
    const { data } = this.props;

    const BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;

    switch (data && data.type) {
      case 'image':
        return BACKOFFICE ? this.renderAsImage(data) : 
        <LazyLoad height={this.props.height} offset={'100'}>{this.renderAsImage(data)}</LazyLoad>;
      case 'embeddedVideo':
        return BACKOFFICE ? this.renderAsVideoEmbed(data) : 
        <LazyLoad height={this.props.height} offset={'100'}>{this.renderAsVideoEmbed(data)}</LazyLoad>;
      default:
        return BACKOFFICE ? this.renderAsImage(data) : 
        <LazyLoad height={this.props.height} offset={'100'}>{this.renderAsImage(data)}</LazyLoad>;

      // default:
      //   return <div className={'mediaError'}>There was an error rendering media.</div>;
    }
  }
}

export default Media;