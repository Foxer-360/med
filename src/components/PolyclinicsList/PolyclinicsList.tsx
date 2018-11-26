import * as React from 'react';
import PcTitle from './components/title';
import PolyclinicInfo from '../PolyclinicInfo';

const data = {
  items: [{ name: 'asd' }, { name: 'asd' }, { name: 'asd' }],
};

const PolyclinicsList = () => (
  <section className="polyclinicsList">
    {data.items.map((item, index) => (
      <div className={'pcitem'} key={index}>
        <div className="fullWidthContainer">
          <div className="container">
            <div className="pcitem__wrapper">
              <div className={'pcitem__img'}>
                <img src="/assets/medicon/images/policlinic1.png" alt="" />
              </div>

              <div className={'pcitem__info'}>
                <PcTitle />

                <div className="pcitem__info__details">
                  <div
                    className="pcitem__info__details__item"
                    style={{ backgroundImage: 'url(/assets/medicon/images/geo.png)' }}
                  >
                    <p>
                      Antala Staška 1670/80 <br />
                      140 00 Praha 4
                    </p>
                  </div>
                  <div
                    className="pcitem__info__details__item"
                    style={{ backgroundImage: 'url(/assets/medicon/images/phone.png)' }}
                  >
                    <p>+420 261 006 111</p>
                  </div>
                  <div
                    className="pcitem__info__details__item"
                    style={{ backgroundImage: 'url(/assets/medicon/images/metro.png)' }}
                  >
                    <p>
                      Metro C <br />
                      stanice Budějovická
                    </p>
                  </div>
                </div>

                <div className={'pcitem__info__list'}>
                  <ul>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                  </ul>

                  <div>Další odbornosti</div>
                </div>

                <div className={'pcitem__info__desc'}>
                  <div className={'pcitem__info__desc__txt'}>
                    Poliklinika Budějovická je největší nestátní ambulantní zařízení v Praze. Klientům poskytuje široké
                    spektrum ambulantních specializací včetně nejmodernějšími přístroji vybavené gastroenterologie a
                    špičkově vybaveného oddělení RDG a zobrazovacích metod. To vše pod jednou střechou.
                  </div>

                  <div>
                    <button className={'btn btn--small btnFirst'}>vice info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default PolyclinicsList;
