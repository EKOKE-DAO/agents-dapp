import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Paragraph from '../../reusable/Paragraph';
import Link from '../../reusable/Link';

const Privacy = () => (
  <Container.Container>
    <Heading.H1>Privacy Policy</Heading.H1>
    <Paragraph.Leading>
      This privacy policy ("Policy") informs you of your choices and our
      practices in relation to your Information (as defined below). For the
      purposes of this Policy, "we", "us", and "our" refer to "EKOKE DAO".
    </Paragraph.Leading>
    <Heading.H2>About children</Heading.H2>
    <Paragraph.Default>
      Our services are not available for use by children and are intended for
      persons over the age of 18 years old, and 21 years old in some
      jurisdictions. Please refer to your country laws for age-appropriate
      guidance. To comply with the current 'UK Data Protection Act' for
      Children, specifically the Age Appropriate Design Code (also known as the
      Children's Act), risks have been assessed. More information can be found
      at{' '}
      <Link.Paragraph href="https://ico.org.uk/for-organisations/childrens-code-hub">
        ICO Children's Code Hub
      </Link.Paragraph>
      . This policy will explain areas of our app or website that may affect
      your privacy and personal details, how we process, collect, manage and
      store those details, and your rights in relation to your data.
    </Paragraph.Default>
    <Heading.H2>Information We Collect</Heading.H2>
    <Paragraph.Default>
      Information you provide to us, such as your name, mailing address, phone
      number, email address, and payment information. Information you provide
      via customer support channels, such as when contacting us via email.
      Information collected when you use our app or website, including cookies
      and location-based data.
    </Paragraph.Default>
    <Heading.H2>How We Use Information</Heading.H2>
    <Paragraph.Default>
      We will only use your personal data when the law allows us to. Common
      reasons include: To provide you with our service, including access to our
      app via a virtual wallet. To improve and monitor the use of our services.
      To provide customer support and respond to your queries or complaints. To
      prevent fraud, defend legal claims, and comply with legal obligations. To
      conduct analytics and provide targeted advertising (with your consent).
    </Paragraph.Default>
    <Heading.H2>Your Choices About How Information is Used</Heading.H2>
    <Paragraph.Default>
      We may run promotions that ask you to share personal information.
      Participation is voluntaryWe may run promotions that ask you to share
      personal information. Participation is voluntary
    </Paragraph.Default>
    <Heading.H2>Who We Share Your Personal Information With</Heading.H2>
    <Paragraph.Default>
      Law enforcement agencies or public authorities if required by law.
    </Paragraph.Default>
    <Heading.H2>Security</Heading.H2>
    <Paragraph.Default>
      We have security measures in place to protect your information, but
      transmission over the internet is not completely secure. We recommend
      using appropriate security measures when using our services.
    </Paragraph.Default>
    <Heading.H2>How Long We Store Your Information</Heading.H2>
    <Paragraph.Default>
      We will store your information for as long as necessary to provide our
      services, comply with legal obligations, resolve disputes, and enforce our
      agreements.
    </Paragraph.Default>
    <Heading.H2>Your rights</Heading.H2>
    <Paragraph.Default>
      You have the right to access, correct, delete, or transfer your personal
      information. You can also object to the processing of your personal
      information or ask us to restrict the processing of your personal
      information.
    </Paragraph.Default>
    <Heading.H2>California Privacy Rights (Addendum 1)</Heading.H2>
    <Paragraph.Default>
      The terms of this addendum apply to residents of California under the
      California Consumer Privacy Act (CCPA). For the purposes of this addendum,
      Personal Information means information that identifies or is linked to a
      particular consumer or household.
    </Paragraph.Default>
    <Heading.H2>Brazil Privacy Rights (Addendum 2)</Heading.H2>
    <Paragraph.Default>
      The terms of this addendum apply to residents of Brazil under the Lei
      Geral de Proteção de Dados (LGPD). You have the right to ask whether we
      hold your personal information and request its deletion, restriction, or
      correction.
    </Paragraph.Default>
    <Heading.H2>Contacts and complaints</Heading.H2>
    <Paragraph.Default>
      If you have any questions about this Policy, please contact us at{' '}
      <Link.Paragraph href="mailto:ekokefly@gmail.com">
        ekokefly@gmail.com
      </Link.Paragraph>
      . If you have any complaints about our handling of your personal data,
      please contact us at{' '}
      <Link.Paragraph href="mailto:ekokefly@gmail.com">
        ekokefly@gmail.com
      </Link.Paragraph>
      . You also have the right to lodge a complaint with the Information
      Commissioner's Office.
    </Paragraph.Default>
    <span className="text-text">Last updated: 2025-12-13</span>
  </Container.Container>
);

export default Privacy;
