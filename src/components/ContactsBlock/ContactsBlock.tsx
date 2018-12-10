import * as React from 'react';
import DividerCircles from '../DividerCircles';

export interface ContactsBlockProps {}

const ContactsBlock = (props: ContactsBlockProps) => {
  return (
    <div className={'contacts-block'}>
      <div className={'container'}>
        <h3>Vedení společnosti a další kontakty</h3>

        <div>
          <h4>Vedení společnosti</h4>
          <div className={'grid contacts-block__main'}>
            <div className={'contacts-block__main__element'}> 
              <p className={'contacts-block__name'}>Jiří Adámek</p>
              <p className={'contacts-block__position'}>generální ředitel</p>
              <p><a className={'contacts-block__email'} href={'mailto:management@mediconas.cz'}>management@mediconas.cz</a></p>
            </div>
            <div className={'contacts-block__main__element'}>
              <p className={'contacts-block__name'}>Ing. Andrea Sklenářová</p>
              <p className={'contacts-block__position'}>finanční ředitelka</p>
              <p><a className={'contacts-block__email'} href={'mailto:management@mediconas.cz'}>management@mediconas.cz</a></p>
            </div>
          </div>
        </div>

        <div>
          <h4>Další kontakty</h4>
          <div className={'grid contacts-block__main'}>
            <div className={'contacts-block__main__element'}>
              <p className={'contacts-block__name'}>Andrea Nedomová</p>
              <p className={'contacts-block__position'}>sekretariát</p>
              <p><a className={'contacts-block__email'} href={'mailto:sekretariat@mediconas.cz'}>sekretariat@mediconas.cz</a></p>
              <p><a href={'tel:+420 261 006 630'}>tel.: +420 261 006 630</a></p>
            </div>
            <div className={'contacts-block__main__element'}>
              <p className={'contacts-block__name'}>Hana Malíková</p>
              <p className={'contacts-block__position'}>sekretariát</p>
              <p><a className={'contacts-block__email'} href={'mailto:sekretariat@mediconas.cz'}>sekretariat@mediconas.cz</a></p>
              <p><a href={'tel:+420 261 006 524'}>tel.: +420 261 006 524</a></p>
            </div>
          </div>
        </div>

        <DividerCircles />

        <div className={'grid contacts-block__list'}>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>MUDr. Regina Šírová</p>
            <p className={'contacts-block__position'}>vedoucí lékařka mamografických</p>
            <p className={'contacts-block__position'}>center skupiny MEDICON</p>
            <p><a className={'contacts-block__email'} href={'mailto:mamografie@mediconas.cz'}>mamografie@mediconas.cz</a></p>
            <p><a href={'tel:+420 261 006 630'}>tel.: +420 261 006 630</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Ing. Eva Sokolová</p>
            <p className={'contacts-block__position'}>vedoucí odboru agendy</p>
            <p className={'contacts-block__position'}>zdravotních pojišťoven</p>
            <p><a className={'contacts-block__email'} href={'mailto:pojistovny@mediconas.cz'}>pojistovny@mediconas.cz</a></p>
            <p><a href={'tel:+420 731 682 290'}>tel.: +420 731 682 290</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Mgr. Matyáš Bittner</p>
            <p className={'contacts-block__position'}>obchodní a marketingový manažer</p>
            <p className={'contacts-block__position'}>(kontakt pro média)</p>
            <p><a className={'contacts-block__email'} href={'mailto:marketing@mediconas.cz'}>marketing@mediconas.cz</a></p>
            <p><a href={'tel:+420 261 006 427'}>tel.: +420 261 006 427</a></p>
            <p><a href={'tel:+420 730 807 487'}>tel.: +420 730 807 487</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Marcela Větrovcová</p>
            <p className={'contacts-block__position'}>koordinátorka programů</p>
            <p className={'contacts-block__position'}>INCARE</p>
            <p><a className={'contacts-block__email'} href={'mailto:incare@mediconas.cz'}>incare@mediconas.cz</a></p>
            <p><a href={'tel:+420 273 162 162'}>tel.: +420 273 162 162</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>MUDr. Regina Šírová</p>
            <p className={'contacts-block__position'}>vedoucí lékařka mamografických</p>
            <p className={'contacts-block__position'}>center skupiny MEDICON</p>
            <p><a className={'contacts-block__email'} href={'mailto:mamografie@mediconas.cz'}>mamografie@mediconas.cz</a></p>
            <p><a href={'tel:+420 261 006 630'}>tel.: +420 261 006 630</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Ing. Eva Sokolová</p>
            <p className={'contacts-block__position'}>vedoucí odboru agendy</p>
            <p className={'contacts-block__position'}>zdravotních pojišťoven</p>
            <p><a className={'contacts-block__email'} href={'mailto:pojistovny@mediconas.cz'}>pojistovny@mediconas.cz</a></p>
            <p><a href={'tel:+420 731 682 290'}>tel.: +420 731 682 290</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Mgr. Matyáš Bittner</p>
            <p className={'contacts-block__position'}>obchodní a marketingový manažer</p>
            <p className={'contacts-block__position'}>(kontakt pro média)</p>
            <p><a className={'contacts-block__email'} href={'mailto:marketing@mediconas.cz'}>marketing@mediconas.cz</a></p>
            <p><a href={'tel:+420 261 006 427'}>tel.: +420 261 006 427</a></p>
            <p><a href={'tel:+420 730 807 487'}>tel.: +420 730 807 487</a></p>
          </div>
          <div className={'contacts-block__list__element'}>
            <p className={'contacts-block__name'}>Marcela Větrovcová</p>
            <p className={'contacts-block__position'}>koordinátorka programů</p>
            <p className={'contacts-block__position'}>INCARE</p>
            <p><a className={'contacts-block__email'} href={'mailto:sekretariat@mediconas.cz'}>incare@mediconas.cz</a></p>
            <p><a href={'tel:+420 261 006 524'}>tel.: +420 273 162 162</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactsBlock;