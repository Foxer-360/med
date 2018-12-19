import * as React from 'react';

export interface AvatarProps {
  onClick: (area: string) => void;
  activeArea: string;
}

const Avatar = (props: AvatarProps) => {
  const { onClick, activeArea } = props;

  return (
    <div className={`avatar ${activeArea}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 579 692"
        xmlSpace="preserve"
      >
        <path d="M331.3,191c-12.2,9.1-26.7,14.3-42.2,14.3c-15.6,0-30.2-5.3-42.5-14.5" />

        <path
          d="M289.7,11.9c51.3-0.7,93.1,45.6,93.1,96.7c0,34.5-19.1,64.6-47.2,80.2c-9,5-14.6,14.4-14.6,24.7l0,0
	c0,15.5,12.6,28.1,28.1,28.1l183.3-14.8c20.2,0,36.6,16.4,36.6,36.6l0,0c0,20.2-16.4,36.6-36.6,36.6l-168.2,14.5c-3,0.3-5.2,3-4.9,6
	L392,596c1,11.6,10.8,25.5,22.4,25.5h27.9c16.9,0,30.7,13.7,30.7,30.7l0,0c0,16.9-13.7,30.7-30.7,30.7h-42h-36.8
	c-22.9,0-42-12.5-44-35.2L292,469.3c-0.4-2.4-3.8-2.4-4.2,0l-27.5,178.4c-2.1,22.8-21.1,35.2-44,35.2h-36.8h-42
	c-16.9,0-30.7-13.7-30.7-30.7l0,0c0-16.9,13.7-30.7,30.7-30.7h27.9c11.6,0,21.4-13.9,22.4-25.5l32.7-275.5c0.4-3-1.8-5.7-4.9-6
	L47.1,300.1c-20.2,0-36.6-16.4-36.6-36.6l0,0c0-20.2,16.4-36.6,36.6-36.6l183.3,14.8c15.5,0,28.1-12.6,28.1-28.1l0,0
	c0-10.3-5.7-19.7-14.6-24.7c-28.2-15.7-47.2-45.7-47.2-80.2C196.6,57.5,238.4,11.2,289.7,11.9z"
        />

        <circle
          className="avatar__area avatar__eye avatar__lEye"
          cx="324.1"
          cy="101.1"
          r="8.6"
          onClick={() => onClick('lEye')}
        />
        <circle
          className="avatar__area avatar__eye AVATAR__rEye"
          cx="256.1"
          cy="101.1"
          r="8.6"
          onClick={() => onClick('rEye')}
        />
        <path
          onClick={() => onClick('mouth')}
          className="avatar__area avatar__mouth"
          d="M321.2,151c0,0-7.6,18.6-31.6,18.6c-24.4,0-31.6-18.6-31.6-18.6"
        />
        <path
          className="avatar__area avatar__nose"
          d="M295.7,128.5c0,0-1.5,4-6,4c-4.6,0-6-4-6-4"
          onClick={() => onClick('nose')}
        />
        <path
          className="avatar__area avatar__eyebrow"
          d="M322.5,71.5c7.3,1.8,13.9,4.8,19.5,8.7"
          onClick={() => onClick('eyebrow')}
        />
        <path
          className="avatar__area avatar__eyebrow"
          d="M238.2,80.2c5.5-3.8,11.9-6.8,19-8.5"
          onClick={() => onClick('eyebrow')}
        />
        <path
          className="avatar__area avatar__ear avatar__lEar "
          d="M202.4,143.7c-12.3,1.5-20-10.7-21.6-23c-1.5-12.3,3.7-20,16-21.6"
          onClick={() => onClick('lEar')}
        />
        <path
          className="avatar__area avatar__ear avatar__rEar "
          d="M378,143.7c12.3,1.5,20-10.7,21.6-23s-3.7-20-16-21.6"
          onClick={() => onClick('rEar')}
        />

        <circle
          className="avatar__area avatar__hand avatar__lHand"
          cx="48.9"
          cy="261.9"
          r={25}
          onClick={() => onClick('arm')}
        />
        <circle
          className="avatar__area avatar__knee avatar__lKnee"
          cx="237.3"
          cy={523}
          r={25}
          onClick={() => onClick('legs')}
        />
        <circle
          className="avatar__area avatar__knee avatar__rKnee"
          cx="343.4"
          cy={523}
          r={25}
          onClick={() => onClick('legs')}
        />
        <circle
          className="avatar__area avatar__feet avatar__lFeet"
          cx={182}
          cy="653.3"
          r={25}
          onClick={() => onClick('feet')}
        />
        <circle
          className="avatar__area avatar__feet avatar__rFeet"
          cx="397.9"
          cy="653.3"
          r={25}
          onClick={() => onClick('feet')}
        />
        <circle
          className="avatar__area avatar__hand avatar__rHand"
          cx="529.8"
          cy="261.9"
          r={25}
          onClick={() => onClick('arm')}
        />
      </svg>
    </div>
  );
};

export default Avatar;
