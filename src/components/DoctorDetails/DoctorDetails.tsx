import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Link from '../../partials/Link';

export interface DoctorDetailsProps {
  data: {
    doctorName: string;
    clinic: LooseObject;
    building: LooseObject;
    officeFloor: string;
    phone: string;
    expertisePhone: string;
    expertise: LooseObject;
    addContactInfo: string;
    addInfo: string;
  };
}

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

const getLink = (data, slug) => {
  if (slug === undefined) {
    slug = '';
  }
  let link = `/${data.languageData && data.languageData.code}/${slug.trim()}`;
  return link;
};

const getContactCenterPhone = (clinic, expertise, expertisePhones) => {
  let shortName = clinic && clinic.shortName && clinic.shortName.split(',')[0];
  let expertiseCode = expertise && expertise[0].code && expertise[0].code.split(',')[0];
  let expertisePhone = expertisePhones && expertisePhones.split('\n');

  let specialDepartmentPhone = expertisePhone && expertisePhone.find(
    phone => phone.includes(expertiseCode) && phone.includes(shortName)
    );

  if (specialDepartmentPhone) {
    return specialDepartmentPhone.split(',')[2];
  }

  switch (shortName) {
    case 'BUD':
      return '237 777 200';
    case 'VYS':
      return '237 777 300';
    case 'HOL':
      return '227 777 677';
    case 'ZP':
      return '234 105 402';
    default:
      return '';
  }
};

const isSpecialDepartment = (clinic, expertise, expertisePhones) => {
  let shortName = clinic && clinic.shortName && clinic.shortName.split(',')[0];
  let expertiseCode = expertise && expertise[0].code && expertise[0].code.split(',')[0];
  let expertisePhone = expertisePhones && expertisePhones.split('\n');

  return expertisePhone && expertisePhone.find(
    phone => phone.includes(expertiseCode) && phone.includes(shortName)
    );
};

const getBuildingColor = (clinicExtraInfo, officeFloor) => {
  const buildings = [
    'Zelená budova',
    'Žlutá budova',
    'Červená budova',
    'Fialová budova',
  ];

  const colors = [
    'green',
    '#AA8F00',
    'red',
    'purple'
  ];

  if (officeFloor && officeFloor.trim().length > 0) {
    officeFloor = `<br>${officeFloor} patro`;
  } else {
    officeFloor = '';
  }

  let result;

  buildings.map((building, idx) => {
    if (clinicExtraInfo.includes(building)) {
      result = `<p style="color: ${colors[idx]}">${building}${officeFloor}</p>`;
    }
  });

  return result;
};

const getClinicLink = (clinic, building, officeFloor, data) => {
  let clinicName = clinic && clinic.name && clinic.name.split(',')[0];
  let clinicUrl = clinic && clinic.url && clinic.url.split(',')[0];
  let officeStreet = building && building.street;
  let officeBuilding = building && building.name;
  return (
    <div className={'policlinicInfo__item--content'}>
      {clinic && <p>
            {clinic.url !== undefined ?
            <Link 
              url={getLink(data, clinicUrl)}
            >
              Poliklinika {clinicName}
            </Link> :
            `Poliklinika ${clinicName}`}</p>}
      {officeStreet && officeStreet.trim().length > 0 && officeStreet}
      {officeBuilding
      && officeBuilding.trim().length > 0
      && officeBuilding.includes('budova')
      && <ReactMarkdown
        skipHtml={false}
        escapeHtml={false}
        source={getBuildingColor(officeBuilding, officeFloor)} 
      />}
    </div>
  );
};

const getDoctorExpertise = (expertise, data) => {
  let expertiseNames = expertise[0].name && expertise[0].name.split(',');
  let expertiseUrl = expertise[0].url && expertise[0].url;

  let expertiseLinks = [];

  expertiseLinks.push(
    expertiseNames !== undefined && expertiseUrl !== undefined && expertiseUrl[0].trim() ?
    <Link url={getLink(data, expertiseUrl)}>{expertiseNames && expertiseNames.join(', ')}</Link> :
    expertiseNames && expertiseNames.join(', ')
  );

  return expertiseLinks;
};

const DoctorDetails = (props: DoctorDetailsProps) => {
  const {
    doctorName,
    clinic,
    building,
    officeFloor,
    phone,
    expertisePhone,
    expertise,
    addContactInfo,
    addInfo,
  } = props.data;

  let officePhone = phone && phone.split(',')[0] && phone.split(',')[0].trim();
  let receptionPhone = phone && phone.split(',')[1] && phone.split(',')[1].trim();
  let contactCenterPhone = getContactCenterPhone(clinic, expertise, expertisePhone);

  return (
    <section className={'doctorDetails'}>
      <Query query={GET_CONTEXT}>
        {({ data }) => {
          return (
        <div className="container">
          {doctorName && doctorName.trim().length > 0 && <div className={'doctorDetails__main'}>
            <h3 className={'gradientHeading'}>{doctorName}</h3>
          </div>}

          <div className="row policlinicInfo__list">
            {(clinic
            || building
            || officeFloor)
            && <div className="col-12 col-lg">
              <div className={'policlinicInfo__item'}>
                <img src={'/assets/medicon/images/geo.svg'} alt="address" />
                  {getClinicLink(clinic, building, officeFloor, data)}
              </div>  
            </div>}
            {(officePhone && officePhone.trim().length > 0
            || receptionPhone && receptionPhone.trim().length > 0
            || contactCenterPhone && contactCenterPhone.trim().length > 0)
            && <div className="col-12 col-lg">
              <div className={'policlinicInfo__item'}>
                <img src={'/assets/medicon/images/phone.svg'} alt="phone number" />
                <ul className={'policlinicInfo__item--content list-unstyled'}>
                  {officePhone && officePhone.trim().length > 0 && <li>
                    <b>{'Ordinace: '}</b>
                    <a className="phone" href={`callto:${officePhone.replace(/ /g, '')}`}>
                      {officePhone}
                    </a>
                  </li>}
                  {receptionPhone && receptionPhone.trim().length > 0 && <li>
                    <b>{'Recepce: '}</b>
                    <a className="phone" href={`callto:${receptionPhone.replace(/ /g, '')}`}>
                      {receptionPhone}
                    </a>
                  </li>}
                  {contactCenterPhone && contactCenterPhone.trim().length > 0 && <li>
                    <b>{'Kontaktní centrum: '}</b>
                    <a className="phone" href={`callto:${contactCenterPhone.replace(/ /g, '')}`}>
                      {contactCenterPhone}
                    </a>
                  </li>}
                </ul>
              </div>
            </div>}
            {expertise && <div className="col-12 col-lg">
              <div className={'policlinicInfo__item'}>
                <img src={'/assets/medicon/images/stethoscopeIcon.svg'} alt="expertise" />
                <div className={'policlinicInfo__item--content'}>
                  <b>{'Odbornost: '}</b>
                  {getDoctorExpertise(expertise, data)}
                </div>
              </div>  
            </div>}
          </div>

          {!isSpecialDepartment(clinic, expertise, expertisePhone) && addContactInfo && <div className="add-info">
            <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={addContactInfo}
            />
          </div>}

          {addInfo && <div className="add-info">
            <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={addInfo}
            />
          </div>}
        </div>
          );
        }}
      </Query>
    </section>
  );
};

export default DoctorDetails;
