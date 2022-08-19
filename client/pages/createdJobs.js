import { useState, useEffect } from 'react';

function CreatedJobs() {
  const [createdJobs, setCreatedJobs] = useState([]);

  const get_jobs = async () => {
    const company_id = '';
    const query = JSON.stringify({
      query: `
      query MyQuery {
        job(where: {company_id: {_eq: "${company_id}"}}) {
          description
          disability
          id
          location
          position
          qualification
          salary
          sector
          company_id
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
    setCreatedJobs(responseJson.data.scheme);
    setIsLoading(false);
  };

  useEffect(() => {
    //Fetch the data for the company for the jobs they have created .
    get_jobs();
  }, []);

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-10 mx-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Created Jobs
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The below are the list of jobs that your company has created for
              the needy. Click on the jobs to get the list of the applicants.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Job position
              </th>
              <th scope="col" class="py-3 px-6">
                Description
              </th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Location
              </th>
              <th scope="col" class="py-3 px-6">
                Sector
              </th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Disability
              </th>
              <th scope="col" class="py-3 px-6">
                Salary
              </th>
            </tr>
          </thead>
          <tbody>
            {createdJobs.map((job) => {
              return (
                <div>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="py-4 px-6">Sliver</td>
                    <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                      Laptop
                    </td>
                    <td class="py-4 px-6">$2999</td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreatedJobs;
