import * as React from 'react';

export interface MediaProps {
  type: string;
  classes?: string;
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
    const { type, data, classes } = this.props;

    switch (type) {
      case 'image':
        return <img src={this.getImgUrl(data)} alt={data && data.alt ? data.alt : ''} className={'mediaImage'} />;
        break;
      case 'background-image':
        // tslint:disable-next-line:max-line-length
        return <div className={classes} style={{ backgroundImage: `url(${this.getImgUrl(data)})` }}>{this.props.children}</div>;
        break;
      default:
        return <div>There was an error</div>;
    }
  }
}

export default Media;
