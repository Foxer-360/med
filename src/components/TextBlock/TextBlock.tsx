import * as React from 'react';

export interface TextBlockProps {
  data: {
    title?: string;
  };
}

const TextBlock = (props: TextBlockProps) => {
  const { title } = props.data;   

  return (
    <section className={'textBlock'}>  
      <div className="container">
        <div className={'textBlock__container'}>
          {title && <h2>{title}</h2>}

          <div className="textBlock__container__text">
            Skupina <strong>MEDICON</strong> patří mezi největší provozovatele ambulantních zařízení v Praze.
            <br /> Její pracoviště senachází v lokalitých <strong>Praha 4, Praha 9 a Praha 10.</strong>
            <br /> Poskytuje komletní spectrum ambulantních specializací a v každé z poliklinik i navazující lékařské
            služby.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
