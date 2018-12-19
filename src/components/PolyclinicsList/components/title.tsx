import * as React from 'react';

export interface TitleProps {
  name: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className={'pcTitle'}>
      <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />

      <div className={'pcTitle__title'}>
        <h3>Poliklinika</h3>
        <div className={'pcTitle__title__subtitle'}>
          <span>{props.name}</span>
          <span className={'pcTitle__title__subtitle__circles'}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
