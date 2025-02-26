import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Paragraph from '../../reusable/Paragraph';
import Link from '../../reusable/Link';

const Cookies = () => {
  return (
    <Container.Container>
      <Heading.H1>Coookie Policy</Heading.H1>
      <Paragraph.Leading>
        On <strong>ekokedao.com</strong>, we use Google Analytics cookies to
        analyze our website traffic. These cookies help us to improve the
        website&apos;s performance and user experience. Google Analytics is a
        popular web analytics service that helps us understand how visitors
        engage with our website. Google Analytics cookies may track things such
        as how long you spend on the website and the pages that you visit so we
        can continue to produce engaging content.
      </Paragraph.Leading>
      <Heading.H2>Google Analytics</Heading.H2>
      <Paragraph.Default>
        This website uses Google Analytics 4 (GA4) to analyze user interactions
        and improve the overall experience. GA4 collects data through cookies,
        which help us understand visitor behavior, traffic sources, and website
        performance. The information gathered is anonymous and does not allow
        for direct identification of users. By using this website, you consent
        to the processing of data by Google in the manner and for the purposes
        described in{' '}
        <Link.Paragraph href="https://policies.google.com/privacy?hl=en-US">
          Google&apos;s Privacy Policy
        </Link.Paragraph>
        . You can disable Google Analytics cookies at any time by adjusting your
        browser settings or using the{' '}
        <Link.Paragraph href="https://tools.google.com/dlpage/gaoptout">
          Google Analytics Opt-out Add-on
        </Link.Paragraph>
        .
      </Paragraph.Default>
      <Heading.H2>The Cookies we use</Heading.H2>
      <table className="border border-collapse border-gray-300 bg-white sm:!text-xs">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Cookie</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">_ga</td>
            <td className="border border-gray-300 px-4 py-2">
              Used to distinguish users by assigning a unique ID.
            </td>
            <td className="border border-gray-300 px-4 py-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              _ga_G-3SYTZ509HY
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Stores session state for GA4.
            </td>
            <td className="border border-gray-300 px-4 py-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">_gid</td>
            <td className="border border-gray-300 px-4 py-2">
              Used to distinguish users.
            </td>
            <td className="border border-gray-300 px-4 py-2">24 hours</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">_gat</td>
            <td className="border border-gray-300 px-4 py-2">
              Used to throttle request rate.
            </td>
            <td className="border border-gray-300 px-4 py-2">1 minute</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              _gac_G-3SYTZ509HY
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Contains campaign-related information for the user.
            </td>
            <td className="border border-gray-300 px-4 py-2">90 days</td>
          </tr>
        </tbody>
      </table>
      <Heading.H2>What are cookies?</Heading.H2>
      <Paragraph.Default>
        Cookies are small text files that are placed on your computer by
        websites that you visit. They are widely used in order to make websites
        work, or work more efficiently, as well as to provide information to the
        owners of the site.
      </Paragraph.Default>
      <Heading.H2>How can I control cookies?</Heading.H2>
      <Paragraph.Default>
        You have the right to decide whether to accept or reject cookies. You
        can exercise your cookie preferences by clicking on the appropriate
        opt-out links provided in the cookie table above.
      </Paragraph.Default>
      <Heading.H2>How can I opt out of Cookies?</Heading.H2>
      <Paragraph.Default>
        If you do not wish to have cookies placed on your device, we suggest
        setting your cookie preferences in your browser. If you want to remove
        previously stored cookies, you can manually delete them at any time.
        However, this will not prevent additional cookies from being stored on
        your device in the future when you visit this website.
      </Paragraph.Default>
      <Paragraph.Default>
        For more information on how to manage cookies, please visit{' '}
        <Link.Paragraph href="https://www.allaboutcookies.org/manage-cookies/">
          www.allaboutcookies.org/manage-cookies/
        </Link.Paragraph>
      </Paragraph.Default>
      <span className="text-text">Last updated: 2025-01-31</span>
    </Container.Container>
  );
};

export default Cookies;
