import * as React from 'react';
import { isObjectLike } from 'lodash';

import {
  Divider,
  AlertNotFound,
  Hero,
  Header,
  CrossRoads,
  Benefits,
  Highlight,
  Footer,
  Reviews,
  TabsBlock,
  TextBlock,
  Map,
  InfoBoxes,
  DoctorList,
  PolyclinicsList,
  ExpertiseList,
  InfoRectangles,
  PolyclinicInfo,
  Blog,
  PolyclinicBoxes,
  DoctorCard,
  DoctorDetails,
  Odbornost,
  MyProblem,
  JobPositions,
  JobOffers,
  CareerForm,
  ExpertiseDescription,
  MedicalGroup,
  Timeline,
  ViewsAboutUs,
  ContactInfo,
  ContactForm,
  ExaminationForm,
  Downloads,
  ContactsBlock,
  Faq,
  BlogArticle,
  DoctorSchedule,
  WorkingHours,
  RegistrationBlock,
  Paragraph,
  UnionStructure
} from '../../components';
import * as resources from './resources';

/**
 *
 */
class ComponentsService {
  Types: LooseObject<string> = {
    DIVIDER: 'Divider',
    HERO: 'Hero',
    HEADER: 'Header',
    CROSSROADS: 'CrossRoads',
    BENEFITS: 'Benefits',
    HIGHLIGHT: 'Highlight',
    FOOTER: 'Footer',
    REVIEWS: 'Reviews',
    TABSBLOCK: 'TabsBlock',
    TEXTBLOCK: 'TextBlock',
    INFOBOXES: 'InfoBoxes',
    MAP: 'Map',
    DOCTORLIST: 'DoctorList',
    POLYCLINICSLIST: 'PolyclinicsList',
    EXPERTISELIST: 'ExpertiseList',
    INFORECTANGLES: 'InfoRectangles',
    POLYCLINICINFO: 'PolyclinicInfo',
    BLOG: 'Blog',
    POLYCLINICBOXES: 'PolyclinicBoxes',
    DOCTORCARD: 'DoctorCard',
    DOCTORDETAILS: 'DoctorDetails',
    ODBORNOST: 'Odbornost',
    MYPROBLEM: 'MyProblem',
    JOBPOSITIONS: 'JobPositions',
    JOBOFFERS: 'JobOffers',
    CAREERFORM: 'CareerForm',
    EXPERTISEDESCRIPTION: 'ExpertiseDescription',
    MEDICALGROUP: 'MedicalGroup',
    TIMELINE: 'Timeline',
    VIEWSABOUTUS: 'ViewsAboutUs',
    CONTACTINFO: 'ContactInfo',
    CONTACTFORM: 'ContactForm',
    EXAMINATIONFORM: 'ExaminationForm',
    DOWNLOADS: 'Downloads',
    CONTACTSBLOCK: 'ContactsBlock',
    FAQ: 'Faq',
    BLOGARTICLE: 'BlogArticle',
    DOCTORSCHEDULE: 'DoctorSchedule',
    WORKINGHOURS: 'WorkingHours',
    REGISTRATIONBLOCK: 'RegistrationBlock',
    PARAGRAPH: 'Paragraph',
    UNIONSTRUCTURE: 'UnionStructure'
  };

  /***/
  getAllowedTypes() {
    const res = Object.keys(this.Types).map(key => {
      return this.Types[key];
    });

    return res;
  }

  /***/
  getComponent(type: string) {
    switch (type) {
      case this.Types.DIVIDER:
        return Divider;
      case this.Types.HEADER:
        return Header;
      case this.Types.HERO:
        return Hero;
      case this.Types.CROSSROADS:
        return CrossRoads;
      case this.Types.BENEFITS:
        return Benefits;
      case this.Types.HIGHLIGHT:
        return Highlight;
      case this.Types.FOOTER:
        return Footer;
      case this.Types.REVIEWS:
        return Reviews;
      case this.Types.TABSBLOCK:
        return TabsBlock;
      case this.Types.TEXTBLOCK:
        return TextBlock;
      case this.Types.MAP:
        return Map;
      case this.Types.INFOBOXES:
        return InfoBoxes;
      case this.Types.DOCTORLIST:
        return DoctorList;
      case this.Types.POLYCLINICSLIST:
        return PolyclinicsList;
      case this.Types.EXPERTISELIST:
        return ExpertiseList;
      case this.Types.INFORECTANGLES:
        return InfoRectangles;
      case this.Types.POLYCLINICINFO:
        return PolyclinicInfo;
      case this.Types.BLOG:
        return Blog;
      case this.Types.POLYCLINICBOXES:
        return PolyclinicBoxes;
      case this.Types.DOCTORCARD:
        return DoctorCard;
      case this.Types.DOCTORDETAILS:
        return DoctorDetails;
      case this.Types.ODBORNOST:
        return Odbornost;
      case this.Types.MYPROBLEM:
        return MyProblem;
      case this.Types.JOBPOSITIONS:
        return JobPositions;
      case this.Types.JOBOFFERS:
        return JobOffers;
      case this.Types.CAREERFORM:
        return CareerForm;
      case this.Types.EXPERTISEDESCRIPTION:
        return ExpertiseDescription;
      case this.Types.MEDICALGROUP:
        return MedicalGroup;
      case this.Types.TIMELINE:
        return Timeline;
      case this.Types.VIEWSABOUTUS:
        return ViewsAboutUs;
      case this.Types.CONTACTINFO:
        return ContactInfo;
      case this.Types.CONTACTFORM:
        return ContactForm;
      case this.Types.EXAMINATIONFORM:
        return ExaminationForm;
      case this.Types.DOWNLOADS:
        return Downloads;
      case this.Types.CONTACTSBLOCK:
        return ContactsBlock;
      case this.Types.FAQ:
        return Faq;
      case this.Types.BLOGARTICLE:
        return BlogArticle;
      case this.Types.DOCTORSCHEDULE:
        return DoctorSchedule;
      case this.Types.WORKINGHOURS:
        return WorkingHours;
      case this.Types.REGISTRATIONBLOCK:
        return RegistrationBlock;
      case this.Types.PARAGRAPH:
        return Paragraph;
      case this.Types.UNIONSTRUCTURE:
        return UnionStructure;

      default:
        return () => <AlertNotFound type="component" />;
    }
  }

  /***/
  getComponentResource(type: string) {
    let res = resources.default;
    const typedRes: LooseObject = resources[type.toLowerCase()];
    if (isObjectLike(typedRes)) {
      res = {
        ...res,
        ...typedRes,
      };
    }

    return res;
  }

  getForm(type: string) {
    switch (type) {
      default:
        return () => <AlertNotFound type="form" />;
    }
  }
}

export default ComponentsService;
