import * as React from 'react';
import Swipeable from 'react-swipeable';

export interface TimelineProps {}

export interface TimelineState {
  x: number;
  limitLeft: boolean;
  limitRight: boolean;
}

class Timeline extends React.Component<TimelineProps, TimelineState> {
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

  renderPoints = () => {
    const items = [
      {
        name: 'Budějovická',
        year: '2008',
        position: 10,
        color: 'blue',
        descriptionA: 'Otevřena',
        descriptionB: 'Poliklinika',
        top: false,
        icon: '/assets/medicon/images/hospitalIcon.svg',
      },
      {
        name: 'Vysočanská',
        year: '2013',
        position: 50,
        color: 'red',
        descriptionA: 'Otevřena',
        descriptionB: '3. poliklinika',
        top: true,
        icon: '/assets/medicon/images/heartIcon.png',
      },
      {
        name: 'Vysočanská',
        year: '2014',
        position: 90,
        color: 'green',
        descriptionA: 'Otevřeno',
        descriptionB: 'Mamacentrum',
        top: false,
        icon: '/assets/medicon/images/pillsIcon.png',
      },
    ];

    const point = <div className={'point'} />;

    const points = [];

    for (let i = 0; i < 60; i++) {
      let positionItem = items.find(item => Math.round((item.position * 60) / 100) === i);

      if (positionItem) {
        points.push(
          <div className={`point ${'point--' + positionItem.color}`}>
            <div className={`point__content ${positionItem.top ? 'point__content--top' : 'point__content--bottom'}`}>
              <img src={positionItem.icon} />
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
    return (
      <div className={'container'}>
        <section className={'timelineSection'}>
          <h2>časová Osa</h2>  

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
                  className={'timeline__holder'}
                  ref={this.timeline}
                  style={{ transform: `translate3d(${this.state.x + 'px'},-7px,0)` }}
                >
                  {this.renderPoints()}
                </div>
              </Swipeable>
            </div>

            {!this.state.limitRight && (
              <div className={'timeline__arrow  timeline__arrow--right'} onClick={e => this.arrowClick(e, 'right')} />
            )}

            <div className={'timeline__blur timeline__blur--right'} onClick={e => this.arrowClick(e, 'right')} />
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
