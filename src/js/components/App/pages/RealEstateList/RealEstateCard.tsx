import * as MdIcon from 'react-icons/md';

import { RealEstate } from '../../../../data/real_estate';
import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';
import Paragraph from '../../../reusable/Paragraph';
import Button from '../../../reusable/Button';

interface Props {
  realEstate: RealEstate;
}

const RealEstateCard = ({ realEstate }: Props) => (
  <Container.Card className="!p-0 !px-0 !py-0" hoverScale>
    {realEstate.image && (
      <img
        src={realEstate.image}
        alt="real estate pic"
        width={300}
        height={300}
        className="object-cover w-full rounded-t-lg"
      />
    )}
    <Container.FlexCols className="px-6 pb-6">
      <Container.Container>
        <Heading.H2>{realEstate.name}</Heading.H2>
      </Container.Container>
      <Container.Container>
        <Paragraph.Default>{realEstate.description}</Paragraph.Default>
      </Container.Container>
      <Container.Container className="text-gray-500 text-sm">
        {realEstate.address && <span>{realEstate.address}, </span>}
        {realEstate.city && <span>{realEstate.city}, </span>}
        {realEstate.zone && <span>{realEstate.zone}, </span>}
        {realEstate.zipCode && <span>{realEstate.zipCode}, </span>}
        {realEstate.country && <span>{realEstate.country}</span>}
      </Container.Container>
      <Container.FlexResponsiveRow className="items-center gap-4 py-4">
        <Link.Button href={Route.realEstateViewUrl(realEstate.id)}>
          <MdIcon.MdVisibility className="mr-2 inline" size={24} />
          View
        </Link.Button>
        <Link.Button href={Route.realEstateEditUrl(realEstate.id)}>
          <MdIcon.MdEdit className="mr-2 inline" size={24} />
          Edit
        </Link.Button>
        <Button.Danger disabled>
          <MdIcon.MdDelete className="mr-2 inline" size={24} />
          Delete
        </Button.Danger>
      </Container.FlexResponsiveRow>
    </Container.FlexCols>
  </Container.Card>
);

export default RealEstateCard;
