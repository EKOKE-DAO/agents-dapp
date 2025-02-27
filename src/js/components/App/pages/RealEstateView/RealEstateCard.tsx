import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';
import YoutubeVideo from '../../../reusable/YoutubeVideo';
import { RealEstate } from '../../../../data/real_estate';

interface Props {
  realEstate: RealEstate;
}

const RealEstateCard = ({ realEstate }: Props) => (
  <Container.Card>
    <Container.FlexCols className="gap-4">
      <Container.FlexResponsiveRow className="gap-8">
        <Container.Container>
          <img
            src={realEstate.image}
            alt={realEstate.name}
            className="w-full sm:object-cover sm:h-[300px] rounded-lg"
            width={300}
            height={300}
          />
        </Container.Container>
        <Container.FlexCols className="gap-2">
          <Heading.H1L>{realEstate.name}</Heading.H1L>
          <Container.Container className="text-sm text-gray-500">
            <Icon.FiMapPin size={16} className="inline mr-2" />
            {realEstate.address} {realEstate.zone && `, ${realEstate.zone}`}
            {realEstate.city && `, ${realEstate.city}`}
            {realEstate.region && `, ${realEstate.region}`}
            {realEstate.country && `, ${realEstate.country}`}
          </Container.Container>
          <Container.Container className="grid grid-cols-1">
            {realEstate.rooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBedroomParent
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.rooms} Rooms
              </Container.Container>
            )}
            {realEstate.squareMeters !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdSquareFoot
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.squareMeters} Square Meters
              </Container.Container>
            )}
            {realEstate.bathrooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBathtub
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.bathrooms} Bathrooms
              </Container.Container>
            )}
            {realEstate.bedrooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBedroomParent
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.bedrooms} Bedrooms
              </Container.Container>
            )}
            {realEstate.yearOfConstruction !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdCalendarToday
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.yearOfConstruction}
              </Container.Container>
            )}
            {realEstate.balconies !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBalcony
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.balconies} Balconies
              </Container.Container>
            )}
            {realEstate.garden === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdLocalFlorist
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garden
              </Container.Container>
            )}
            {realEstate.pool === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdPool
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Swimming Pool
              </Container.Container>
            )}
            {realEstate.garage === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdGarage
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garage
              </Container.Container>
            )}
            {realEstate.parking === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdLocalParking
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Outside Parking
              </Container.Container>
            )}
          </Container.Container>
        </Container.FlexCols>
      </Container.FlexResponsiveRow>
      <Paragraph.Leading>{realEstate.description}</Paragraph.Leading>
      {realEstate.youtubeUrl && (
        <Container.Container className="mx-auto">
          <YoutubeVideo width={720} url={realEstate.youtubeUrl} />
        </Container.Container>
      )}
    </Container.FlexCols>
  </Container.Card>
);

export default RealEstateCard;
