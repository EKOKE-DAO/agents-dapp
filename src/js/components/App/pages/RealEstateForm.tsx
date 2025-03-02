import * as React from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa6';

import { RealEstate } from '../../../data/real_estate';
import Button from '../../reusable/Button';
import Checkbox from '../../reusable/Checkbox';
import Container from '../../reusable/Container';
import Input from '../../reusable/Input';
import {
  validateLatitude,
  validateLongitude,
  validateURL,
} from '../../../utils/validate';
import Select from '../../reusable/Select';

interface Props {
  formState: RealEstate;
  setFormState: (realEstate: RealEstate) => void;
  loading: boolean;
  onSubmit: () => void;
}

const RealEstateForm = ({
  formState,
  setFormState,
  loading,
  onSubmit,
}: Props) => {
  const [latitude, setLatitude] = React.useState<string>('');
  const [longitude, setLongitude] = React.useState<string>('');

  // form handlers
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, name: e.target.value });
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, description: e.target.value });
  };

  const onGarageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, garage: e.target.checked });
  };

  const onGardenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, garden: e.target.checked });
  };

  const onPoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, pool: e.target.checked });
  };

  const onParkingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, parking: e.target.checked });
  };

  const onElevatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, elevator: e.target.checked });
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, image: e.target.value });
  };

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, address: e.target.value });
  };

  const onCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, country: e.target.value });
  };

  const onContinentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, continent: e.target.value });
  };

  const onRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, region: e.target.value });
  };

  const onZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, zip_code: e.target.value });
  };

  const onLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(e.target.value);

    const asNum = parseFloat(e.target.value);

    if (validateLongitude(e.target.value)) {
      setFormState({
        ...formState,
        latitude: !Number.isNaN(asNum) ? asNum : null,
      });
    }
  };

  const onLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(e.target.value);

    const asNum = parseFloat(e.target.value);

    if (validateLongitude(e.target.value)) {
      setFormState({
        ...formState,
        longitude: !Number.isNaN(asNum) ? asNum : null,
      });
    }
  };

  const onZoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, zone: e.target.value });
  };

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, city: e.target.value });
  };

  const onSquareMetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, square_meters: parseFloat(e.target.value) });
  };

  const onRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      rooms: e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onBathroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      bathrooms: e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onBedroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      bedrooms: e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onFloorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      floors: e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onBalconiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      balconies: e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onYearOfConstructionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormState({
      ...formState,
      year_of_construction:
        e.target.value.length === 0 ? null : parseInt(e.target.value),
    });
  };

  const onEnergyClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, energy_class: e.target.value });
  };

  const onYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, youtube: e.target.value });
  };

  return (
    <form
      className="xl:w-3/4 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Container.Container className="grid grid-cols-2 sm:grid-cols-1 gap-4 justify-around items-start w-full">
        <Input.IconInput
          id="name"
          icon={<FaIcons.FaBuilding className="inline mr-2" />}
          label="Name"
          type="text"
          required
          value={formState.name}
          onChange={onNameChange}
          placeholder="Beautiful Villa"
          readOnly={loading}
        />
        <Input.Textarea
          id="description"
          label="Description"
          type="text"
          required
          rows={5}
          value={formState.description}
          onChange={onDescriptionChange}
          placeholder="A beautiful villa with a pool and garden..."
          readOnly={loading}
        />
        <Input.IconInput
          id="address"
          icon={<FaIcons.FaAddressBook className="inline mr-2" />}
          label="Address"
          type="text"
          value={formState.address ?? undefined}
          onChange={onAddressChange}
          placeholder="1234 Main St"
          readOnly={loading}
        />
        <Input.IconInput
          id="city"
          icon={<FaIcons.FaCity className="inline mr-2" />}
          label="City"
          type="text"
          value={formState.city ?? ''}
          onChange={onCityChange}
          placeholder="Los Angeles"
          readOnly={loading}
        />
        <Input.IconInput
          id="zipCode"
          icon={<FaIcons.FaEnvelope className="inline mr-2" />}
          label="Zip Code"
          type="text"
          value={formState.zip_code ?? ''}
          onChange={onZipCodeChange}
          placeholder="90001"
          readOnly={loading}
        />
        <Input.IconInput
          id="zone"
          icon={<FaIcons.FaMountainCity className="inline mr-2" />}
          label="Zone"
          type="text"
          value={formState.zone ?? ''}
          onChange={onZoneChange}
          placeholder="Downtown"
          readOnly={loading}
        />
        <Input.IconInput
          id="region"
          icon={<FaIcons.FaTreeCity className="inline mr-2" />}
          label="Region"
          type="text"
          value={formState.region ?? ''}
          onChange={onRegionChange}
          placeholder="California"
          readOnly={loading}
        />
        <Input.IconInput
          id="country"
          icon={<FaIcons.FaFlagUsa className="inline mr-2" />}
          label="Country"
          type="text"
          value={formState.country ?? ''}
          onChange={onCountryChange}
          placeholder="United States"
          readOnly={loading}
        />
        <Input.IconInput
          id="latitude"
          icon={<FaIcons.FaLocationPin className="inline mr-2" />}
          label="Latitude"
          type="text"
          value={latitude}
          onChange={onLatitudeChange}
          placeholder="-34.397"
          validate={validateLatitude}
          validationMessage="Invalid Latitude"
          readOnly={loading}
        />
        <Input.IconInput
          id="longitude"
          icon={<FaIcons.FaLocationPin className="inline mr-2" />}
          label="Longitude"
          type="text"
          value={longitude}
          onChange={onLongitudeChange}
          placeholder="150.644"
          validate={validateLongitude}
          validationMessage="Invalid Longitude"
          readOnly={loading}
        />
        <Select
          id="continent"
          label="Continent"
          value={formState.continent ?? undefined}
          onChange={onContinentChange}
          disabled={loading}
        >
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="NorthAmerica">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="SouthAmerica">South America</option>
        </Select>
        <Input.IconInput
          id="image"
          icon={<FaIcons.FaPhotoFilm className="inline mr-2" />}
          label="Image URL"
          type="text"
          value={formState.image ?? ''}
          onChange={onImageChange}
          placeholder="https://example.com/image.jpg"
          validate={validateURL}
          validationMessage="Invalid URL"
          readOnly={loading}
        />
        <Input.IconInput
          id="squareMeters"
          icon={<FaIcons.FaRuler className="inline mr-2" />}
          label="Square Meters"
          type="number"
          value={formState.square_meters ?? ''}
          onChange={onSquareMetersChange}
          placeholder="200"
          readOnly={loading}
        />
        <Input.IconInput
          id="rooms"
          icon={<MdIcons.MdMeetingRoom className="inline mr-2" />}
          label="Rooms"
          type="number"
          value={formState.rooms ?? ''}
          onChange={onRoomsChange}
          placeholder="4"
          readOnly={loading}
        />
        <Input.IconInput
          id="bedrooms"
          icon={<MdIcons.MdBedroomParent className="inline mr-2" />}
          label="Bedrooms"
          type="number"
          value={formState.bedrooms ?? ''}
          onChange={onBedroomsChange}
          placeholder="3"
          readOnly={loading}
        />
        <Input.IconInput
          id="bathrooms"
          icon={<MdIcons.MdBathroom className="inline mr-2" />}
          label="Bathrooms"
          type="number"
          value={formState.bathrooms ?? ''}
          onChange={onBathroomsChange}
          placeholder="2"
          readOnly={loading}
        />
        <Input.IconInput
          id="balcons"
          icon={<MdIcons.MdBalcony className="inline mr-2" />}
          label="Balconies"
          type="number"
          value={formState.balconies ?? ''}
          onChange={onBalconiesChange}
          placeholder="1"
          readOnly={loading}
        />
        <Input.IconInput
          id="floors"
          icon={<FaIcons.FaStairs className="inline mr-2" />}
          label="Floors"
          type="number"
          value={formState.floors ?? ''}
          onChange={onFloorsChange}
          placeholder="2"
          readOnly={loading}
        />
        <Input.IconInput
          id="year-of-construction"
          icon={<MdIcons.MdCalendarMonth className="inline mr-2" />}
          label="Year of Construction"
          type="number"
          value={formState.year_of_construction ?? ''}
          onChange={onYearOfConstructionChange}
          placeholder="2017"
          readOnly={loading}
        />
        <Input.IconInput
          id="youtubeUrl"
          icon={<FaIcons.FaYoutube className="inline mr-2" />}
          label="Youtube URL"
          type="text"
          value={formState.youtube ?? ''}
          onChange={onYoutubeUrlChange}
          placeholder="https://www.youtube.com/watch?v=..."
          validate={validateURL}
          validationMessage="Invalid URL"
          readOnly={loading}
        />
        <Input.IconInput
          id="energy-class"
          icon={<MdIcons.MdElectricBolt className="inline mr-2" />}
          label="Energy Class"
          type="text"
          value={formState.energy_class ?? ''}
          onChange={onEnergyClassChange}
          placeholder="A"
          readOnly={loading}
        />
        <Container.FlexResponsiveRow className="gap-4 h-full">
          <Checkbox
            id="garden"
            label="Garden"
            checked={formState.garden ?? false}
            className="h-full"
            onChecked={onGardenChange}
            disabled={loading}
          />
          <Checkbox
            id="garage"
            label="Garage"
            checked={formState.garage ?? false}
            className="h-full"
            onChecked={onGarageChange}
            disabled={loading}
          />
          <Checkbox
            id="pool"
            label="Pool"
            checked={formState.pool ?? false}
            className="h-full"
            onChecked={onPoolChange}
            disabled={loading}
          />
          <Checkbox
            id="parking"
            label="Parking"
            checked={formState.parking ?? false}
            className="h-full"
            onChecked={onParkingChange}
            disabled={loading}
          />
          <Checkbox
            id="elevator"
            label="Elevator"
            checked={formState.elevator ?? false}
            className="h-full"
            onChecked={onElevatorChange}
            disabled={loading}
          />
        </Container.FlexResponsiveRow>
      </Container.Container>
      <Container.Flex className="w-full justify-end py-8">
        <Button.Cta type="submit" disabled={loading} onClick={onSubmit}>
          Submit
          {loading ? (
            <FaIcons.FaSpinner className="ml-2 inline animate-spin" size={24} />
          ) : (
            <MdIcons.MdArrowForward className="ml-2 inline" size={24} />
          )}
        </Button.Cta>
      </Container.Flex>
    </form>
  );
};

export default RealEstateForm;
