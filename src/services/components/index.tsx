import * as React from 'react';
import { isObjectLike } from 'lodash';
import WebFont from 'webfontloader';
import {
  Dummy,
  AlertNotFound,
  Hero,
  Header,
  CrossRoads,
  Benefits,
  Highlight,
  Footer,
  Reviews,
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
} from '../../components';
import * as resources from './resources';

// WEB FONTS
WebFont.load({
  google: {
    families: ['Monserrat:400,600,700', 'sans-serif'],
  },
});

/**
 *
 */
class ComponentsService {
  Types: LooseObject<string> = {
    DUMMY: 'Dummy',
    HERO: 'Hero',
    HEADER: 'Header',
    CROSSROADS: 'CrossRoads',
    BENEFITS: 'Benefits',
    HIGHLIGHT: 'Highlight',
    FOOTER: 'Footer',
    REVIEWS: 'Reviews',
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
      case this.Types.DUMMY:
        return Dummy;
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
