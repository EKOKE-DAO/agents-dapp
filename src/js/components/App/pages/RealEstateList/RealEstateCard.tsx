import * as MdIcon from 'react-icons/md';

import { RealEstate } from '../../../../data/real_estate';
import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';
import Paragraph from '../../../reusable/Paragraph';
import DeleteRealEstateButton from './DeleteRealEstateButton';

interface Props {
  id: bigint;
  realEstate: RealEstate;
  onDelete: (id: bigint) => void;
}

const RealEstateCard = ({ id, realEstate, onDelete }: Props) => (
  <Container.Card className="!p-0 !px-0 !py-0">
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
        {realEstate.zip_code && <span>{realEstate.zip_code}, </span>}
        {realEstate.country && <span>{realEstate.country}</span>}
      </Container.Container>
      <Container.FlexResponsiveRow className="items-center gap-4 py-4">
        <Link.Button href={Route.realEstateViewUrl(id)}>
          <MdIcon.MdVisibility className="mr-2 inline" size={24} />
          View
        </Link.Button>
        <Link.Button href={Route.realEstateEditUrl(id)}>
          <MdIcon.MdEdit className="mr-2 inline" size={24} />
          Edit
        </Link.Button>
        <DeleteRealEstateButton id={id} onDelete={onDelete} />
      </Container.FlexResponsiveRow>
    </Container.FlexCols>
  </Container.Card>
);

export default RealEstateCard;
