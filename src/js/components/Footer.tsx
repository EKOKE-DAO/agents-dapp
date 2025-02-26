import * as Icon from 'react-icons/fa6';
import * as SiIcon from 'react-icons/si';

import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Link from './reusable/Link';
import { Route } from '../utils/routes';
import Paragraph from './reusable/Paragraph';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="z-10">
      <Container.Container className="bg-brandRed text-white m-0 p-8">
        <div className="bg-white content-none h-[1px] mx-auto w-page"></div>
        <Container.FlexResponsiveRow className="justify-between w-page sm:w-full mx-auto">
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">EKOKE Agents D-App</Heading.H2>
            <Link.Default href={Route.HOME} className="text-white">
              Home
            </Link.Default>
            <Link.Default
              href={Route.REAL_ESTATE_CREATE}
              className="text-white"
            >
              New Real Estate
            </Link.Default>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Legal</Heading.H2>
            <Link.Default href={Route.COOKIES} className="text-white">
              Cookies
            </Link.Default>
            <Link.Default href={Route.PRIVACY} className="text-white">
              Privacy
            </Link.Default>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Follow Us On</Heading.H2>
            <Link.IconLink
              href={'https://linktr.ee/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <SiIcon.SiLinktree className="mr-2 inline text-white" />
              <span className="ml-2">Linktree</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://discord.gg/AuWa2JATYf'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaDiscord className="mr-2 inline text-white" />
              <span className="ml-2">Discord</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://github.com/EKOKE-DAO'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaGithub className="mr-2 inline text-white" />
              GitHub
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.instagram.com/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaInstagram className="mr-2 inline text-white" />
              Instagram
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.linkedin.com/company/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaLinkedin className="mr-2 inline text-white" />
              LinkedIn
            </Link.IconLink>
            <Link.IconLink
              href={'https://t.me/ekokeTOKENgroup'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaTelegram className="mr-2 inline text-white" />
              <span className="ml-2">Telegram</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.tiktok.com/@ekokedao?lang=en'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaTiktok className="mr-2 inline text-white" />
              <span className="ml-2">TikTok</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://x.com/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <Icon.FaXTwitter className="mr-2 inline text-white" />
              <span className="ml-2">X.com</span>
            </Link.IconLink>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Disclaimer</Heading.H2>
            <Paragraph.Default className="text-white">
              Cryptocurrency may be unregulated in your jurisdiction. The value
              of cryptocurrencies may go down as well as up. Profits may be
              subject to capital gains or other taxes applicable in your
              jurisdiction. It is your responsibility to ensure that you comply
              with tax and other legal obligations in your jurisdiction.
            </Paragraph.Default>
          </Container.FlexCols>
        </Container.FlexResponsiveRow>
        <p className="text-xs text-center text-white my-4">
          Copyright © {year} by EKOKE DAO | Powered and secured by ICP and
          Ethereum Blockchain
        </p>
      </Container.Container>
    </footer>
  );
};

export default Footer;
