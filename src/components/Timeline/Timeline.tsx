import * as React from 'react';
import * as Swipeable from 'react-swipeable';

import List from '../List';
import Media from '../../partials/Media';

interface Item {
  name: string;
  year: string;
  color: string;
  descriptionA: string;
  descriptionB: string;
  top: false;
  image: {};
}

export interface TimelineProps {
  data: {
    title: string;
    items: Item[];
  };
}

export interface TimelineState {
  x: number;
  limitLeft: boolean;
  limitRight: boolean;
}

class Timeline extends React.Component<TimelineProps, TimelineState> {
  // tslint:disable-next-line:no-any
  public timeline: any;

  constructor(props: TimelineProps) {
    super(props);
    this.timeline = React.createRef();

    this.state = {
      x: 0,
      limitLeft: false,
      limitRight: false,
    };
  }

  translateTimeline = ammount => {
    this.setState(
      {
        x: this.state.x + ammount,
        limitLeft: false,
        limitRight: false,
      },
      () => {
        let width = this.timeline.current && this.timeline.current.getBoundingClientRect().width;

        if (this.state.x >= 0) {
          this.setState({
            limitLeft: true,
          });
        }

        if (this.state.x < 0) {
          let offset = this.state.x * -1;

          if (offset > width / 3) {
            this.setState({
              limitRight: true,
            });
          }
        }
      }
    );
  }

  handleSwipe = (e, direction, deltaX, velocity) => {
    let ammount = deltaX < 0 ? deltaX * -1 : deltaX;

    if (direction === 'left') {
      ammount = ammount * -1;
    }

    this.translateTimeline(ammount);
  }

  handleDrag = e => {
    e.preventDefault();
  }

  arrowClick = (e, direction) => {
    let ammount = 300;

    if (direction === 'right') {
      ammount = ammount * -1;
    }

    this.translateTimeline(ammount);
  }

  renderPoints = (items): Element[] => {
    const point = <div className={'point'} />;

    const points = [];

    let x = 30;

    if (window && window.innerWidth > 768) {
      x = 60;
    }

    for (let i = 0; i < x; i++) {
      let positionItem = items.find(item => Math.round((item.position * x) / 100) === i);

      if (positionItem) {
        points.push(
          <div key={i} className={`point ${'point--' + positionItem.color}`}>
            <div
              className={`point__content ${
                items.indexOf(positionItem) % 2 === 0 ? 'point__content--top' : 'point__content--bottom'
              }`}
            >
              {positionItem.image && <Media data={positionItem.image} type="image" />}
              <p>{positionItem.descriptionA}</p>
              <p>{positionItem.descriptionB}</p>
              <h5>{positionItem.name}</h5>
              <p className={'year'}>{positionItem.year}</p>
            </div>
          </div>
        );
      } else {
        points.push(point);
      }
    }
    return points;
  }

  public render() {
    const { title, items } = this.props.data;

    return (
      <div className={'container'}>
        <section className={'timelineSection'}>
          {title && <h2 className={'gradientHeading'}>{title}</h2>}

          <div className={'timeline'}>
            {!this.state.limitLeft && (
              <div className={'timeline__arrow  timeline__arrow--left'} onClick={e => this.arrowClick(e, 'left')} />
            )}

            <div className={'timeline__blur  timeline__blur--left'} />

            <div className={'timeline__cont'} onMouseDown={e => this.handleDrag(e)}>
              <Swipeable
                trackMouse={true}
                preventDefaultTouchmoveEvent={true}
                onSwipedLeft={(e, deltaX, velocity) => this.handleSwipe(e, 'left', deltaX, velocity)}
                onSwipedRight={(e, deltaX, velocity) => this.handleSwipe(e, 'right', deltaX, velocity)}
              >
                <div
                  ref={this.timeline}
                  className={'timeline__holder'}
                  style={{ transform: `translate3d(${this.state.x + 'px'},-7px,0)` }}
                >
                  <List data={items}>{({ data }) => <>{this.renderPoints(data)}</>}</List>
                </div>
              </Swipeable>
            </div>

            {!this.state.limitRight && (
              <div className={'timeline__arrow  timeline__arrow--right'} onClick={e => this.arrowClick(e, 'right')} />
            )}

            <div className={'timeline__blur timeline__blur--right'} onClick={e => this.arrowClick(e, 'right')} />
          </div>

          <div className={'timeline timeline__mobile'}>
            <div
              className={'timeline__holder'}
              ref={this.timeline}
              style={{ transform: `translate3d(${this.state.x + 'px'},-7px,0)` }}
            >
              <List data={items}>{({ data }) => <>{this.renderPoints(data)}</>}</List>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
