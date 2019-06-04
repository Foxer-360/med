import * as React from 'react';
import MediaQuery from 'react-responsive';

import ParagraphText from './components/ParagraphText';
import ParagraphMedia from './components/ParagraphMedia';

const LEFT_TEXT_RIGHT_TEXT = 'ltrt';
const LEFT_IMAGE_RIGHT_IMAGE = 'liri';
const LEFT_TEXT_RIGHT_IMAGE = 'ltri';
const LEFT_IMAGE_RIGHT_TEXT = 'lirt';
const FULL_IMAGE = 'fi';
const FULL_TEXT = 'ft';
const FULL = 'f';

export interface ParagraphProps {
  data: {
    leftText?: string;
    leftMedia?: LooseObject;
    rightText?: string;
    rightMedia?: LooseObject;
    paddingTop?: boolean;
    paddingBottom?: boolean;
  };
}

const Paragraph = (props: ParagraphProps) => {
  const { leftMedia, rightMedia, leftText, rightText } = props.data;
  let layout;

  const LEFT_MEDIA = leftMedia && (leftMedia.filename || leftMedia.type === 'embeddedVideo'); 
  const LEFT_TEXT = leftText && leftText.length > 0;
  const RIGHT_MEDIA = rightMedia && rightMedia.filename;
  const RIGHT_TEXT = rightText && rightText.length > 0;

  if (LEFT_TEXT && RIGHT_TEXT && !LEFT_MEDIA && !RIGHT_MEDIA) {
    layout = LEFT_TEXT_RIGHT_TEXT;
  }

  if (LEFT_MEDIA && RIGHT_MEDIA && !LEFT_TEXT && !RIGHT_TEXT) {
    layout = LEFT_IMAGE_RIGHT_IMAGE;
  }

  if (LEFT_MEDIA && RIGHT_TEXT && !LEFT_TEXT && !RIGHT_MEDIA) {
    layout = LEFT_IMAGE_RIGHT_TEXT;
  }

  if (LEFT_TEXT && RIGHT_MEDIA && !LEFT_MEDIA && !RIGHT_TEXT) {
    layout = LEFT_TEXT_RIGHT_IMAGE;
  }

  if (LEFT_MEDIA && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_TEXT) {
    layout = FULL_IMAGE;
  }

  if (LEFT_TEXT && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_MEDIA) { 
    layout = FULL_TEXT;
  }

  if (LEFT_TEXT && RIGHT_TEXT && LEFT_MEDIA && RIGHT_MEDIA) { 
    layout = FULL;
  }

  const renderLayout = (value) => {
    switch (value) {
      case LEFT_IMAGE_RIGHT_IMAGE:
        return (
          <div className={'row'}>
            <div className="col-12 col-md-6">
              <ParagraphMedia source={leftMedia} width={'438'} />
            </div>
            <div className="col-12 col-md-6 imgWithMarginTop">
              <ParagraphMedia source={rightMedia} width={'438'} />
            </div>
          </div>);
      case LEFT_TEXT_RIGHT_TEXT:
        return (
          <div className={'row'}>
            <div className="col-12 col-md-6">
              <ParagraphText source={leftText} />
            </div>
            <div className="col-12 col-md-6">
              <ParagraphText source={rightText} />
            </div>
          </div>);
      case LEFT_TEXT_RIGHT_IMAGE:
        return (
          <>
            <div className="row">
              <MediaQuery minDeviceWidth={992}>
                <div className={'col-12 col-lg-6'}>
                  <ParagraphText source={leftText} class={'textWithImg'} />
                </div>
                <div className="col-12 col-lg-6">
                  <ParagraphMedia source={rightMedia} width={'438'} />
                </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={991}>
                <div className="col-12 col-lg-6">
                  <ParagraphMedia source={rightMedia} width={'438'} />
                </div>
                <div className={'col-12 col-lg-6'}>
                  <ParagraphText source={leftText} class={'textWithImg'} />
                </div>
              </MediaQuery>
            </div>
          </>);
      case LEFT_IMAGE_RIGHT_TEXT:
        return (
          <div className={'row'}>
            <div className="col-12 col-lg-6">
              <ParagraphMedia source={leftMedia} width={'438'} />
            </div>
            <div className={'col-12 col-lg-6'}>
              <ParagraphText source={rightText} class={'textWithImg'} />
            </div>
          </div>);
      case FULL_IMAGE:
        return (
          <div className="row">
            <div className="col">
              <ParagraphMedia source={leftMedia} width={'876'} />
            </div>
          </div>
        );
      case FULL_TEXT:
        return (
          <div className="row">
            <div className="col">
              <ParagraphText source={leftText} />
            </div>
          </div>
        );
      case FULL: // ALL CONTENT
        return (
          <>
            <div className="row">
              <div className="col-12 col-lg-6">
                <ParagraphMedia source={leftMedia} width={'438'} />
              </div>
              <div className={'col-12 col-lg-6'}>
                <ParagraphText source={rightText} class={'textWithImg'} />
              </div>
            </div>
            <div className="row">
              <MediaQuery minDeviceWidth={992}>
                <div className={'col-12 col-lg-6'}>
                  <ParagraphText source={leftText} />
                </div>
                <div className="col-12 col-lg-6">
                  <ParagraphMedia source={rightMedia} width={'438'} />
                </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={991}>
                <div className="col-12 col-lg-6">
                  <ParagraphMedia source={rightMedia} width={'438'} />
                </div>
                <div className={'col-12 col-lg-6'}>
                  <ParagraphText source={leftText} class={'textAllContent'} />
                </div>
              </MediaQuery>
            </div>
          </>
        );
      
      default: 
        return (
          <div style={{ padding: '3rem 0' }}>
            <p style={{ fontSize: 24 }}>
              <b>Left text:</b>{' '}
              <span style={{ color: '#c92731' }}>can be used only with right text or right image</span>
            </p>
            <p style={{ fontSize: 24 }}>
              <b>Left image:</b>{' '}
              <span style={{ color: '#c92731' }}>can be used only with right text or right image</span>
            </p>
            <p style={{ fontSize: 24 }}>
              <b>Right text:</b>{' '}
              <span style={{ color: '#c92731' }}>can be used only with left text and left image</span>
            </p>
            <p style={{ fontSize: 24 }}>
              <b>Right Image:</b>{' '}
              <span style={{ color: '#c92731' }}>can be used only with left text or left image</span>
            </p>
          </div>
        );
    }
  };

  const { paddingTop, paddingBottom } = props.data;

  return (
    <div 
      className={
        `paragraph ${paddingTop ? 'paragraph--paddingTop' : ''} ${paddingBottom ? 'paragraph--paddingBottom' : ''}`}
    >
      <div className="container">
        <div className={`paragraph__content`}>
          {renderLayout(layout)}
        </div>
      </div>
    </div>
  );
};

export default Paragraph;