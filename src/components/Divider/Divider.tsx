import * as React from 'react';
import isBackoffice from '../../helpers/isBackoffice';

interface DividerProps {
  data: {
    marginTop: string;
    marginBottom: string;
    displayDots: boolean;
  };
}

export default function Divider(props: DividerProps) {
  const { marginTop, marginBottom, displayDots } = props.data;

  return (isBackoffice() || displayDots) ? (
    <div 
      className="dividerCircles"
      style={{
        marginTop: parseInt(marginTop, 10) > 0 ? parseInt(marginTop, 10) : 0,
        marginBottom: parseInt(marginBottom, 10) > 0 ? parseInt(marginBottom, 10) : 0
      }}
    >
      <div />
    </div>
  ) : <></>;
}