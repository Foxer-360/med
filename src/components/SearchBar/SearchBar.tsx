import * as React from 'react';
import { debounce } from 'lodash';

import SvgIcon from '../../partials/SvgIcon';
import BlogSearchResults from './components/BlogSearchResults';
import DoctorSearchResults from './components/DoctorSearchResults';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
  doctorsLink?: LooseObject;
  blogSearchResults?: LooseObject;
}

export interface SearchBarState {
  focused: boolean;
  query: string;
  value: string;
  doctorResults: boolean;
  blogResults: boolean;
}

const doctorSearchResultsTemplate: LooseObject = {
  datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
  data: {
    // tslint:disable-next-line: max-line-length
    name: '%doctorPersonalInformation,prenominal% %doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% %doctorPersonalInformation,postnominal%',
    speciality: '%doctorPersonalInformation,expertises,0,name% ',
    clinic: '%doctorPersonalInformation,polyclinic,name% ',
    workingHours: '%doctorPersonalInformation,workingHours% ',
    absence: '%doctorPersonalInformation,absence% ',
    link: {
      url: '/cs/ds:doctor',
      pageId: 'cjoy8qfdl001b0845fwgt2200',
      urlNewWindow: false,
    },
  },
  filters: [],
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  // tslint:disable-next-line:no-any
  public searchBar: any;
  // tslint:disable-next-line:no-any
  public input: any;

  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      query: '',
      value: '',
      focused: false,
      doctorResults: null,
      blogResults: null
    };

    this.input = React.createRef();
    this.searchBar = React.createRef();

    this.checkDoctorResults = debounce(this.checkDoctorResults, 50).bind(this);
    this.checkBlogResults = debounce(this.checkBlogResults, 50).bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.clearData = debounce(this.clearData, 600).bind(this);
    this.changeSearchQuery = debounce(this.changeSearchQuery, 600).bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  checkDoctorResults(doctorResults: boolean) {
    if (doctorResults !== this.state.doctorResults) {
      return this.setState({ doctorResults });
    }
  }

  checkBlogResults(blogResults: boolean) {
    if(blogResults !== this.state.blogResults) {
      return this.setState({ blogResults });
    }
  }

  handleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  public changeSearchQuery(query: string) {
    this.setState({
      query,
    });
  }

  setValue(value: string) {
    this.setState({
      value,
    });
  }

  showValue() {
    this.setState({
      query: this.state.value
    })
  }

  handleClick(e: LooseObject) {
    if (this.searchBar.current && this.searchBar && this.searchBar.current.contains(e.target)) {
      return;
    } else {
      this.changeSearchQuery('');
    }
  }

  clearData() {
    this.setState({ focused: false, query: '' });
    if (this.input.current) {
      this.input.current.value = '';
    }
  }
  
  renderNoResults() {
    if (!this.state.doctorResults && !this.state.blogResults) {
      return (
        <div className={'searchBarResults__noResults'}>
          Bohužel jsme nenašli žádné vysledky.
        </div>
      );
    } else { return <></>; }
  }

  public render() {
    const { placeholder, barColor } = this.props;
   
    let doctorSearchResults = { ...doctorSearchResultsTemplate };
    
    if (this.props.doctorsLink) {
      doctorSearchResults = {
        ...doctorSearchResults,
        data: {
          ...doctorSearchResults.data,
          link: this.props.doctorsLink,
        },
      };
    }

    return (
      <div
        ref={this.searchBar}
        className={`searchBar ${this.state.focused ? 'searchBar--focused' : ''} searchBar--${barColor}`}
      >
        <div 
          className={'searchBar__input'}  
          onClick={() => this.showValue()}
          onTouchStart={() => this.showValue()}
        >
          <input
            type="text"
            ref={this.input}
            placeholder={placeholder}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleFocus()}
            onChange={e => {
              this.changeSearchQuery(e.target.value),
              this.setValue(e.target.value);
            }}
          />
          <SvgIcon name={'search'} type={barColor} />
        </div>

        <div className={`searchBar__bar`} />
        {this.state.query.length > 1 &&
          <div className={`searchBarResults ${this.state.query.length > 1 ? 'active' : ''}`}>
            {this.props.blogSearchResults && this.state.query.length > 1 && (
              <BlogSearchResults
                query={this.state.query}
                searchKeys={[
                  'pi.page.name',
                  'pi.page.annotations.perex',
                  'pi.page.annotations.title'
                ]}
                searchResults={this.props.blogSearchResults}
                checkBlogResults={this.checkBlogResults}
              />
            )}
            
            {doctorSearchResults && this.state.query.length > 1 && (
              <DoctorSearchResults
                searchResults={doctorSearchResults}
                query={this.state.query}
                searchKeys={[
                  'di.doctorPersonalInformation.firstName',
                  'di.doctorPersonalInformation.lastName',
                  'di.doctorPersonalInformation.expertises.0.name',
                  'di.doctorPersonalInformation.polyclinic.name',
                  'di.doctorPersonalInformation.prenominal',
                  'di.doctorPersonalInformation.postnominal'
                ]}
                clearData={this.clearData}
                checkDoctorResults={this.checkDoctorResults}
              />
            )}

            {this.renderNoResults()}
        </div>
      }
      </div>
    );
  }
}

export default SearchBar;