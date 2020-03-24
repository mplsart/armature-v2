import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GiantActionButton from './GiantActionButton';
import PrimaryButton from './PrimaryButton';
import ResponsiveLinkButton from './ResponsiveLinkButton';
import SmallActionButton from './SmallActionButton';
import SocialButton from './SocialButton';

import EyeIcon from '../../icons/Eye';
import CalendarIcon from '../../icons/Calendar';
import MapMarkerIcon from '../../icons/MapMarker';
import NewspaperIcon from '../../icons/Newspaper';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const ExternalLink: React.ForwardRefExoticComponent<React.FC<React.ElementType>> = React.forwardRef(
  function ExternalLinkAnchor(props, ref: React.Ref<HTMLAnchorElement>) {
    const testHandler = (e: React.MouseEvent): void => {
      console.log('ExternalLink.onClick event fired');
      e.preventDefault();
    };

    return <a ref={ref} {...props} onClick={testHandler} />;
  }
);

storiesOf('Custom Buttons', module)
  .add('Primary Button', () => (
    <>
      <div>
        <PrimaryButton href="https://www.mplsart.com">Minimal Props</PrimaryButton>
      </div>
      <br />
      <div>
        <PrimaryButton
          onClick={(): void => {
            console.log('Inline Clickhandler ');
          }}
        >
          Inline Click Handler
        </PrimaryButton>
      </div>

      <br />
      <div>
        <PrimaryButton
          data-test="test" // no error
          href="https://www.mplsart.com"
          variant="outlined"
          target="blank"
          rel="noopener"
          component={ExternalLink}
        >
          Custom Props
        </PrimaryButton>
      </div>
    </>
  ))
  .add('Call To Action Buttons', () => (
    <>
      <div>
        <GiantActionButton href="https://www.mplsart.com">Minimal Props</GiantActionButton>
      </div>
      <br />
      <div>
        <GiantActionButton
          onClick={(): void => {
            console.log('Inline Clickhandler ');
          }}
        >
          Inline Click Handler
        </GiantActionButton>
      </div>

      <br />
      <div>
        <GiantActionButton
          data-test="test" // no error
          href="https://www.mplsart.com"
          variant="outlined"
          target="blank"
          rel="noopener"
          component={ExternalLink}
        >
          Custom Props
        </GiantActionButton>
      </div>

      <div>
        <SmallActionButton href="https://www.mplsart.com">Minimal Props</SmallActionButton>
      </div>
      <br />
      <div>
        <SmallActionButton
          onClick={(): void => {
            console.log('Inline Clickhandler ');
          }}
        >
          Inline Click Handler
        </SmallActionButton>
      </div>

      <br />
      <div>
        <SmallActionButton
          data-test="test" // no error
          href="https://www.mplsart.com"
          variant="outlined"
          target="blank"
          rel="noopener"
          component={ExternalLink}
        >
          Custom Props
        </SmallActionButton>
      </div>
    </>
  ))
  .add('Social Buttons', () => (
    <>
      <h2>Basic Usage</h2>
      <SocialButton service="artsy" />
      <SocialButton service="instagram" />
      <SocialButton service="facebook" />
      <SocialButton service="twitter" />
      <SocialButton service="tumblr" />
      <SocialButton service="vimeo" />
      <SocialButton service="youtube" />
      <SocialButton service="mnartists" />
      <SocialButton service="other" />

      <h2>With Forwarded Attributes</h2>
      <SocialButton service="instagram" title="default tag (anchor)" />
      <SocialButton service="facebook" data-value="cool" title="bold tag" component="b" />
      <SocialButton service="twitter" title="italic tag" />
      <SocialButton service="tumblr" size="small" />
      <SocialButton service="vimeo" size="small" />
      <SocialButton service="youtube" size="small" />
      <SocialButton service="mnartists" size="small" />
      <SocialButton service="other" size="small" />

      <h2>With Functional Link Component</h2>
      <SocialButton
        component={ExternalLink}
        target="_new"
        href="https://www.facebook.com/mplsart"
        rel="noopener"
        service="facebook"
        data-ga-category="social-link"
        data-ga-label="facebook"
        title="Follow Us on Facebook"
      />
    </>
  ))
  .add('Responsive Links', () => (
    <>
      <div>
        <ResponsiveLinkButton href="https://www.mplsart.com">Minimal Props</ResponsiveLinkButton>
      </div>
      <br />
      <div>
        <ResponsiveLinkButton
          href="https://www.mplsart.com"
          onClick={(): void => {
            console.log('Inline Clickhandler ');
          }}
        >
          Inline Clickhandler
        </ResponsiveLinkButton>
      </div>
      <br />
      <div>
        <ResponsiveLinkButton
          data-test="test" // no error
          href="https://www.mplsart.com"
          variant="outlined"
          target="blank"
          rel="noopener"
          component={ExternalLink}
        >
          Custom Props
        </ResponsiveLinkButton>
      </div>
    </>
  ))
  .add('Material Components', () => {
    const actions = [
      { icon: <CalendarIcon />, name: 'Event' },
      { icon: <EyeIcon />, name: 'Eyeball' },
      { icon: <MapMarkerIcon />, name: 'Venue' },
      { icon: <NewspaperIcon />, name: 'Article' },
    ];

    return (
      <SpeedDial ariaLabel="SpeedDial exampddle" icon={<SpeedDialIcon />} open={true}>
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            FabProps={{ size: 'small' }}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    );
  });
