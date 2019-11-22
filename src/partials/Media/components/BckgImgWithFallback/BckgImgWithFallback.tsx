import * as React from 'react';

import getImageUrl from '../../../../helpers/getImageUrl';
import readEnvVariable from '../../../../helpers/readEnvVariable';

const REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable('REACT_APP_MEDIA_LIBRARY_SERVER');

export interface BckgImgWithFallbackProps {
  sizes: LooseObject;
  image: LooseObject;
  classes?: string;
  addStyles?: LooseObject;
}

export interface BckgImgWithFallbackState {
  src: string;
  loading: boolean;
}

class BckgImgWithFallback extends React.Component<BckgImgWithFallbackProps, BckgImgWithFallbackState> {
  constructor(props: BckgImgWithFallbackProps) {
    super(props);

    this.state = {
      src: null,
      loading: true,
    };
  }

  createVariantIfDoesNotExist = () => {
    if (this.props.sizes) {
      fetch(`${REACT_APP_MEDIA_LIBRARY_SERVER}/createDimension`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.image.id,
          width: parseInt(this.props.sizes.width, 10),
          height: parseInt(this.props.sizes.height, 10),
        }),
      })
        .then(response => {
          // this.getSizedUrl();
        })
        .catch(() => {
          console.log('There was an error creating variant');
        });
    }
  }

  getSizedUrl = props => {
    const baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    let sizedUrl = null;
    this.props.sizes.width = Math.round(this.props.sizes.width * 1.5)
    this.props.sizes.height = Math.round(this.props.sizes.height * 1.5)
    let sizes = props.sizes;
    let image = props.image

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
        src: image,
      });
    }
  }

  loadImg(src: any) {
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
    this.getSizedUrl(this.props);
  }

  componentWillUpdate(nextProps: BckgImgWithFallbackProps, nextState: BckgImgWithFallbackState) {
    if (this.state.src !== nextState.src) {
      this.loadImg(nextState.src);
    }
    if (nextProps.image !== this.props.image) {
      this.getSizedUrl(nextProps);
    }
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();

    this.setState({
      loading: true,
      src: getImageUrl(this.props.image),    
    });
  }

  public render() {  
    const { image, classes, addStyles } = this.props;
    
    return (
      <div className={classes}
      style={{ backgroundImage: image
      && `url(${require(this.state.src) ? this.state.src : getImageUrl(this.props.image)})`,
      ...addStyles }}>
        {this.props.children}
      </div>
    );
  }
}

export default BckgImgWithFallback;