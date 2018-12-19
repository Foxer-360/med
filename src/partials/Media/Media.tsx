import * as React from 'react';

export interface MediaProps {
  type: string;
  data: any;
}

export interface MediaState {}

class Media extends React.Component<MediaProps, MediaState> {
  constructor(props: MediaProps) {
    super(props);
  }

  getImgUrl = data => {
    const baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

    if (data) {
      return baseUrl + data.category + data.hash + '_' + data.filename;
    }
    return null;
  }

  render() {
    const { type, data } = this.props;

    switch (type) {
      case 'image':
        return <img src={this.getImgUrl(data)} alt={data && data.alt ? data.alt : ''} className={'mediaImage'} />;
        break;
      default:
        return <div>There was an error</div>;
    }
  }
}

export default Media;