import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SocialButton from './SocialButton';
import ResponsiveLinkButton from './ResponsiveLinkButton';
import PrimaryButton from './PrimaryButton';

const ExternalLink: React.ForwardRefExoticComponent<React.FunctionComponent<React.ElementType>> = React.forwardRef(
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
  .add('Social Buttons', () => (
    <>
      <h2>Basic Usage</h2>
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
  ));
