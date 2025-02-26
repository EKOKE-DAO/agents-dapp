import { Route } from '../../utils/routes';
import Container from '../reusable/Container';
import Link from '../reusable/Link';

interface Props {
  href?: Route;
  name: string;
  onClick?: () => void;
}

const TopbarLink = ({ href, name, onClick }: Props) => {
  const currentPath = document.location.pathname;
  // get first part of the path
  const path = `/${currentPath.split('/')[1]}`;

  if (href && path === Route.url(href)) {
    return (
      <Container.Container className="border-brandRed border-b-4 py-2 h-full">
        <Link.Default href={href} className="text-lg sm:text-xs">
          {name}
        </Link.Default>
      </Container.Container>
    );
  }

  return (
    <Container.Container className="py-2">
      <Link.Default
        href={href}
        onClick={onClick}
        className="text-lg sm:text-xs"
      >
        {name}
      </Link.Default>
    </Container.Container>
  );
};

export const DropdownLinkButton = ({ href, name, onClick }: Props) => {
  const currentPath = document.location.pathname;
  // get first part of the path
  const path = `/${currentPath.split('/')[1]}`;

  if (href && path === Route.url(href)) {
    return (
      <Container.Container className="border-brandRed border-b-4 py-2 h-full">
        <Link.Default href={href} className="text-lg sm:text-xs">
          {name}
        </Link.Default>
      </Container.Container>
    );
  }

  return (
    <Container.Container className="py-8">
      <Link.Default
        href={href}
        onClick={onClick}
        className="text-lg sm:text-xs"
      >
        {name}
      </Link.Default>
    </Container.Container>
  );
};

export default TopbarLink;
