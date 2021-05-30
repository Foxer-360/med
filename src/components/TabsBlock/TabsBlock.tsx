import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Collapse } from '@material-ui/core';
import * as ReactMarkdown from 'react-markdown/with-html';

import Media from '../../partials/Media';
import Button from '../../partials/Button';

interface TabItem {
  title?: string;
  text?: string;
  image?: LooseObject;
  button?: boolean;
  buttonText?: string;
  buttonLink?: LooseObject;
  buttonStyle?: string;
}

export interface TabsBlockProps {
  data: {
    tabs?: TabItem[];
  };
}

const TabsBlock = (props: TabsBlockProps) => {
  try {
    const [expand, setExpand] = React.useState(false);

    const { tabs } = props.data;
  
    return (
      <div className={`tabs container`}>
        <Tabs>
          <TabList className="react-tabs__tab-list d-flex flex-column flex-md-row bd-highlight">
            {tabs.map(i => {
              return (
                <Tab className="react-tabs__tab p-2 bd-highlight flex-fill react-tabs__tab" role="tab">
                <p>{i.title}</p>
              </Tab>
              )
            })}
          </TabList>
          <Collapse in={expand} collapsedHeight={225}>
            {tabs.map(i => {
                return (
                  <TabPanel>
                    <ReactMarkdown
                      skipHtml={false}
                      escapeHtml={false}
                      source={i.text} 
                    />
                    <Media type={'image'} data={i.image} nowrapper/>
                    {i.button && 
                    <Button url={i.buttonLink} classes={'btn--fullWidth btn--blw-img ' + i.buttonStyle}>
                      {i.buttonText}
                    </Button>}
                  </TabPanel>
                )
              })}
          </Collapse>
          <button className={`tabs__expand ${expand ? 'expanded' : 'collapsed'}`} onClick={ ()=>setExpand(!expand) } />
          <button className="btn btn--blueBkg btn--fullWidth" onClick={ ()=>setExpand(!expand) } >{`${expand ? 'Skrýt' : 'Zobrazit'} více informací`}</button>
        </Tabs>
      </div>
    );
  } catch (e) {
    console.log(e)
    return (
      <div className={`tabs container`} />
    )
  }
};

export default TabsBlock;