import { useState, useEffect } from 'react';

function EnrolledJobs() {
  const [enrolledJobs, setEnrolledJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const get_enrolledJobs = async () => {
    const query = JSON.stringify({
      query: `
      query MyQuery {
        application(where: {profile_id: {_eq: "126427dc-ebc4-4362-8a53-27eb091ed536"}}) {
          id
          job_id
          profile_id
          job {
            company {
              name
              id
            }
            description
            disability
            id
            location
            position
            qualification
            salary
            sector
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
    setEnrolledJobs(responseJson.data.application);
    setIsLoading(false);
  };

  useEffect(() => {
    //Fetch the data for the user for the jobs he registered.
    get_enrolledJobs();
  }, []);

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-10 mx-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Enrolled Jobs
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The below are the list of jobs you have applied. You might have
              got the response of these applications on your email. So please
              check your mail if you haven't.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Company name
              </th>
              <th scope="col" class="py-3 px-6">
                Job position
              </th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Description
              </th>
              <th scope="col" class="py-3 px-6">
                Location
              </th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Sector
              </th>
              <th scope="col" class="py-3 px-6">
                Disability
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledJobs.map((job) => {
              return (
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {job.job.company.name}
                  </th>
                  <td class="py-4 px-6">{job.job.position}</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    {job.job.description}
                  </td>
                  <td class="py-4 px-6">{job.job.location}</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    {job.job.sector}
                  </td>
                  <td class="py-4 px-6">{job.job.disability}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrolledJobs;
