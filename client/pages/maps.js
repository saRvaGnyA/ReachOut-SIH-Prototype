import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { getDistance, isPointWithinRadius } from 'geolib';
// import geolib from 'geolib';
import * as geolib from 'geolib';

function Map() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [distance, setDistance] = useState();
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBLYAWKNXFfi-sbuvNhldYMNP6-_ql-xOo',
  });
  let center = { lat: 0, lng: 0 };

  if (!isLoaded) {
    return <div>couldn't load google maps :(</div>;
  }
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }
  center = { lat: latitude, lng: longitude };

  let arr = [
    {
      lat: parseFloat(19.19443222884145),
      lng: parseFloat(72.84613530780784),
    },
    {
      lat: parseFloat(19.20337583618798),
      lng: parseFloat(72.85956859588623),
    },
    {
      lat: parseFloat(19.19945782353501),
      lng: parseFloat(72.84604947711937),
    },
    {
      lat: parseFloat(19.20038992529954),
      lng: parseFloat(72.8624959338949),
    },
    {
      lat: parseFloat(19.193743175937936),
      lng: parseFloat(72.85545781743983),
    },
    {
      lat: parseFloat(19.20873851048727),
      lng: parseFloat(72.85335496557215),
    },
    {
      lat: parseFloat(20.506876734232385),
      lng: parseFloat(73.31951923400982),
    },
    {
      lat: parseFloat(21.07178033055075),
      lng: parseFloat(73.12176532775982),
    },
    {
      lat: parseFloat(20.928187671260243),
      lng: parseFloat(73.96771259338482),
    },
  ]; //get points of location of companies in this array
  let nearbyUsers = [];
  // nearbyUsers = Object.values(arr.map(item => getDistance(center, item)).filter(distance => distance < 5000))
  for (let i = 0; i < arr.length; i++) {
    if (
      geolib.isPointWithinRadius(
        { latitude: arr[i].lat, longitude: arr[i].lng },
        { latitude: center.lat, longitude: center.lng },
        distance * 1000, //plots pts within 5kms of our centre's location
      )
    ) {
      nearbyUsers = [...nearbyUsers, arr[i]];
    }
  }
  console.log(distance);

  const homemarker = {
    url: 'homemarker.png',
    size: new google.maps.Size(33, 45),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly',
  };

  return (
    <div>
      <form>
        <div>
          <div className="md:grid md:grid-cols-4 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="m-3 text-3xl font-medium leading-6 text-gray-900 dark:text-white">
                  Search Jobs
                </h3>
                <label
                  for="visitors"
                  class="m-3 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Distance from your location (in Km's) :
                </label>
                <input
                  type="number"
                  id="visitors"
                  class="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={distance}
                  min="0"
                  onChange={(e) => {
                    setDistance(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-3 ">
              <div
                style={{
                  padding: '10px',
                  width: '100%',
                  height: '700px',
                }}
              >
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{
                    width: '100%',
                    borderRadius: '10px',
                    height: '100%',
                  }}
                  onClick={(ev) => {
                    console.log('latitide = ', ev.latLng.lat());
                    console.log('longitude = ', ev.latLng.lng());
                  }}
                  options={{
                    streetViewControl: false,
                  }}
                >
                  {nearbyUsers.map((item) => {
                    return <Marker position={item}></Marker>;
                  })}
                  <Marker position={center} icon={homemarker}></Marker>
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Map;
