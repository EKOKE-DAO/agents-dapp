import * as React from 'react';
import * as Icon from 'react-icons/fi';

import { DropdownLinkButton } from './TopbarLink';
import Container from '../reusable/Container';
import { Route } from '../../utils/routes';
import Link from '../reusable/Link';

export interface DropdownEntry {
  name: string;
  route?: Route;
  externalLink?: string;
  url?: string;
}

interface Props {
  name: string;
  entries: DropdownEntry[];
}

const Dropdown = ({ name, entries }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdwon = () => {
    setIsOpen(!isOpen);
  };

  const onClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <Container.Container className="relative">
      <DropdownButton
        name={name}
        isOpen={isOpen}
        onClick={toggleDropdwon}
        onHover={setIsOpen}
      >
        <DropdownMenu onClickOutside={onClickOutside} entries={entries} />
      </DropdownButton>
    </Container.Container>
  );
};

const DropdownButton = ({
  name,
  isOpen,
  onClick,
  onHover,
  children,
}: {
  name: string;
  isOpen: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
  children?: React.ReactNode;
}) => {
  const handleMouseEnter = () => {
    onHover(true);
  };

  const handleMouseLeave = () => {
    onHover(false);
  };

  return (
    <Container.Container
      className="h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container.FlexRow className="relative items-center justify-between">
        <DropdownLinkButton onClick={onClick} name={name} />
        <Icon.FiChevronDown
          className={`
              transition-transform duration-200 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              } text-brandLight sm:text-brand hover:text-bgContentHover sm:hover:text-brandHover hover:cursor-pointer`}
          onClick={onClick}
        />
      </Container.FlexRow>
      {isOpen && children}
    </Container.Container>
  );
};

const DropdownMenu = ({
  onClickOutside,
  entries,
}: {
  onClickOutside: () => void;
  entries: DropdownEntry[];
}) => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      // Rimuovi l'event listener quando il componente viene smontato
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container.FlexCols
      className="animate__animated animate__fadeIn animate__faster bg-white absolute rounded-lg left-[-75%] sm:left-0 top-[80px] sm:top-[30px] rounded-b-lg bg-brandLight shadow-xl h-fit w-[256px] before:absolute before:content-[''] 
             before:border-8 before:border-transparent 
             before:border-b-brandLight before:top-[-14px] 
             before:left-1/4 before:-translate-x-1/2"
    >
      <div ref={dropdownRef}>
        {entries.map((entry) => (
          <DropdownItem key={entry.name} entry={entry} />
        ))}
      </div>
    </Container.FlexCols>
  );
};

const DropdownItem = ({ entry }: { entry: DropdownEntry }) => (
  <Container.Container className="hover:bg-bgContentHover px-4 py-4 sm:py-2">
    <DropdownLink entry={entry} />
  </Container.Container>
);

const DropdownLink = ({ entry }: { entry: DropdownEntry }) => {
  if (entry.route) {
    // check if entry.route is a Route object
    return (
      <DropdownLinkHref key={entry.name} href={entry.route}>
        {entry.name}
      </DropdownLinkHref>
    );
  } else if (entry.url) {
    return (
      <DropdownLinkHref key={entry.name} href={entry.url}>
        {entry.name}
      </DropdownLinkHref>
    );
  } else if (entry.externalLink) {
    return (
      <DropdownLinkHref key={entry.name} href={entry.externalLink}>
        {entry.name}
      </DropdownLinkHref>
    );
  } else {
    return <></>;
  }
};

interface DropdownLinkProps {
  href?: Route | string;
  children: string | React.ReactNode;
  onClick?: () => void;
}

const DropdownLinkHref = (props: DropdownLinkProps) => (
  <Link.Default
    className="h-full text-lg sm:text-sm !text-brand hover:text-brandHover block no-underline"
    href={props.href}
  >
    {props.children}
  </Link.Default>
);

export default Dropdown;
