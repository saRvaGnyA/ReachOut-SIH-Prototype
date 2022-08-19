import { useState, useEffect } from 'react';

function EnrolledSchemes() {
  const [appliedSchemes, setAppliedSchemes] = useState([]);
  useEffect(() => {
    //Fetch the data for the user for the schemes he registered.
  }, []);

  return (
    <div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-10 mx-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Enrolled Schemes
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The below are the list of schemes you have applied. You might have
              got the response of these applications on your email. So please
              check your mail if you haven't.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Scheme name
              </th>
              <th scope="col" class="py-3 px-6">
                Scheme description
              </th>
              <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Scheme type
              </th>
              <th scope="col" class="py-3 px-6">
                Scheme eligibility
              </th>
            </tr>
          </thead>
          <tbody>
            {appliedSchemes.map((scheme) => {
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

export default EnrolledSchemes;