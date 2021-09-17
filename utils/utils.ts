import {Location} from 'react-native-location';
import {GeoDecode} from './types';

const getFormattedTime = (target: number) => {
  return `${target >= 10 ? target.toString() : `0${target}`}`;
};

export const getConvertedDate = (date: Date) => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  return `${getFormattedTime(hours)}:${getFormattedTime(minutes)}:${getFormattedTime(seconds)}`;
};

export const getLastLocation = (locations: Location[]) => {
  const lastLocation = locations.reduce(
    (previous: Location, current) => {
      previous = previous.timestamp > current.timestamp ? previous : current;
      return previous;
    },
    {
      speed: 0,
      course: 0,
      accuracy: 0,
      altitude: 0,
      latitude: 0,
      longitude: 0,
      timestamp: 0,
      altitudeAccuracy: 0,
    },
  );
  return lastLocation;
};

export const geoDecode = async (
  latitude: number,
  longitude: number,
): Promise<GeoDecode> => {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  ).then(response => response.json());
};