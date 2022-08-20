import { useState, useEffect } from 'react';

function AcceptedSchemes() {
  const [acceptedSchemes, setAcceptedSchemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const get_acceptedSchemes = async () => {
    const query = JSON.stringify({
      query: `
      query MyQuery {
        beneficiary(where: {status: {_eq: 1}}) {
          id
          profile_id
          scheme_id
          scheme {
            admin_id
            description
            eligibility
            id
            name
            type
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
    setAcceptedSchemes(responseJson.data.beneficiary);
    setIsLoading(false);
  };
  useEffect(() => {
    //Fetch the data for the user for the schemes he registered.
    get_acceptedSchemes();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-10 mx-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Accepted Schemes
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The below are the list of schemes you have applied. You might have
              got the response of these applications on your email. So please
              check your mail if you haven't.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Scheme name
              </th>
              <th scope="col" className="py-3 px-6">
                Scheme description
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Scheme type
              </th>
              <th scope="col" className="py-3 px-6">
                Scheme eligibility
              </th>
            </tr>
          </thead>
          <tbody>
            {acceptedSchemes.map((scheme) => {
              return (
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {scheme.scheme.name}
                  </th>
                  <td className="py-4 px-6">{scheme.scheme.description}</td>
                  <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    {scheme.scheme.type}
                  </td>
                  <td className="py-4 px-6">{scheme.scheme.eligibility}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AcceptedSchemes;
