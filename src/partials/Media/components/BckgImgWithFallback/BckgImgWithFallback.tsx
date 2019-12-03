import * as React from 'react';

import getImageUrl from '../../../../helpers/getImageUrl';
import readEnvVariable from '../../../../helpers/readEnvVariable';
import LazyLoad from 'react-lazyload';

const REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable('REACT_APP_MEDIA_LIBRARY_SERVER');

export interface BckgImgWithFallbackProps {
  sizes: LooseObject;
  originalData: LooseObject;
  classes?: string;
  addStyles?: LooseObject;
}

export interface BckgImgWithFallbackState {
  src: string;
  loading: boolean;
  originalSrc: string;
}

class BckgImgWithFallback extends React.Component<BckgImgWithFallbackProps, BckgImgWithFallbackState> {
  constructor(props: BckgImgWithFallbackProps) {
    super(props);

    this.state = {
      src: null,
      loading: true,
      originalSrc: getImageUrl(this.props.originalData)
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
          id: this.props.originalData.id,
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
    this.props.sizes.width = Math.round(this.props.sizes.width * 1.5);
    this.props.sizes.height = Math.round(this.props.sizes.height * 1.5);
    let sizes = props.sizes;

    this.setState({
      loading: true,
    });
    
    if (sizes && sizes.width && sizes.height && props.originalData && props.originalData.filename) {
      let filename = props.originalData.filename.split('.');
      filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
      filename = filename.join('.');

      sizedUrl = baseUrl + props.originalData.category + props.originalData.hash + '_' + filename;

      this.setState({
        src: sizedUrl,
      });
    } else {
      this.setState({
        src: this.state.originalSrc,
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
    this.getSizedUrl(this.props);
  }

  componentWillUpdate(nextProps: BckgImgWithFallbackProps, nextState: BckgImgWithFallbackState) {
    if (this.state.src !== nextState.src) {
      this.loadImg(nextState.src);
    }
    if (nextState.originalSrc !== this.state.originalSrc) {
      this.getSizedUrl(nextProps);
    }
  }

  handleError = () => {
    this.createVariantIfDoesNotExist();

    this.setState({
      loading: true,
      src: this.state.originalSrc,    
    });
  }

  public render() {
    const { classes, addStyles } = this.props;
    
    if (this.props.originalData && this.props.originalData.filename) {
    return (
      <LazyLoad height={this.props.sizes.height * 1.5} offset={'100'}>
      <div 
        className={classes}
        style={{ 
          backgroundImage: `url(${this.state.src ? this.state.src : getImageUrl(this.props.originalData)})`,
        ...addStyles }}>
                  {/* <img 
          alt={''}
          className={'mediaImage inner'}
          src={this.state.src ? this.state.src : getImageUrl(this.props.originalData)}
        /> */}

          {this.props.children}
      </div>
      </LazyLoad>
    );
    }
    else {
      return null;
    }
  }
}

export default BckgImgWithFallback;