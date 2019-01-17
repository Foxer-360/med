import * as React from 'react';
import ImgWithFallback from './components/ImgWithFallback';

export interface MediaProps {
  type: string;
  // tslint:disable:no-any
  data: any;
}

export interface MediaState { }

class Media extends React.Component<MediaProps, MediaState> {
  constructor(props: MediaProps) {
    super(props);
  }

  renderAsImage = data => {
    const baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    let recommendedSizes = data.recommendedSizes;

    let originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;

    return (
      <ImgWithFallback
        originalSrc={originalUrl}
        alt={data.alt || ''}
        baseUrl={baseUrl}
        recommendedSizes={recommendedSizes}
        originalData={data}
      />
    );
  }

  renderAsVideoEmbed(data: any) {
    let embedUrl = data.url + '?rel=0&amp;controls=0&amp;showinfo=0';

    return (
      <div className={'aspect-ratio'}>
        <iframe className="mediaEmbeddedVideo" src={embedUrl} allowFullScreen={true} frameBorder="0" />
      </div>
    );
  }

  render() {
    const { data } = this.props;

    switch (data.type) {
      case 'image':
        return this.renderAsImage(data);
      case 'embeddedVideo':
        return this.renderAsVideoEmbed(data);
      default:
        return <div className={'mediaError'}>There was an error rendering media.</div>;
    }
  }
}

export default Media;
