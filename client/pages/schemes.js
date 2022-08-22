import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/ui';
import { supabase } from '../utils/supabaseClient';
import PopUpModalScheme from '../components/PopUpModals/PopUpModalScheme';

function Schemes() {
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [present, setPresent] = useState(true);
  const [selected, setSelected] = useState({});
  const [schemes, setSchemes] = useState([]);

  const { user } = Auth.useUser();

  const get_schemes = async () => {
    const query = JSON.stringify({
      query: `query MyQuery {
  scheme {
    description
    eligibility
    id
    name
    type
    admin {
      name
    }
  }
}
`,
    });

    const response = await fetch(
      'https://reachout-sih.herokuapp.com/v1/graphql',
      {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
        method: 'POST',
        body: query,
      },
    );

    const responseJson = await response.json();
    console.log(responseJson);
    setSchemes(responseJson.data.scheme);
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetch schemes offered by the ministries from the database.
    // set the state variables
    get_schemes();
  }, []);

  function changePopUpState() {
    setModal(!modal);
  }

  const get_details = async (scheme) => {
    setSelected(scheme);
    const query = JSON.stringify({
      query: `
      query MyQuery {
        beneficiary(where: {profile_id: {_eq: "${user.id}"}, scheme_id: {_eq: "${scheme.id}"}}) {
          id
          profile_id
          scheme_id
          status
        }
      }
`,
    });

    const response = await fetch(
      'https://reachout-sih.herokuapp.com/v1/graphql',
      {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
        method: 'POST',
        body: query,
      },
    );

    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.data.beneficiary.length === 0) {
      setPresent(false);
    }
    setIsLoading(false);
    changePopUpState();
  };

  function openPopUp(scheme) {
    get_details(scheme);
  }

  if (isLoading) {
    return <h1 className="text-3xl text-center p-3">Loading...</h1>;
  }

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Scheme name
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Type of Scheme
              </th>
              <th scope="col" className="py-3 px-6">
                Eligibility
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme) => {
              return (
                <tr
                  key={scheme.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {scheme.name}
                  </th>
                  <td className="py-4 px-6">{scheme.description}</td>
                  <td className="py-4 px-6">{scheme.type}</td>
                  <td className="py-4 px-6">{scheme.eligibility}</td>
                  <td className="py-4 px-6">
                    <p
                      onClick={() => {
                        openPopUp(scheme);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                      Apply
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modal && (
        <PopUpModalScheme
          selected={selected}
          func={changePopUpState}
          setP={setPresent}
          registered={present}
          user={user}
        />
      )}
    </div>
  );
}

export default function logi() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Schemes supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
      </Schemes>
    </Auth.UserContextProvider>
  );
}
