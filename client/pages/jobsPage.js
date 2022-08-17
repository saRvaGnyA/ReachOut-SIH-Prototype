import { useState, useEffect } from 'react';

function jobsPage() {
  const arr = [
    'aarya',
    'aaryan',
    'aarvin',
    'bharud',
    'bhavik',
    'bhoswaal',
    'chatar',
    'chhatta',
    'chhoooot',
  ];
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  useEffect(() => {
    // Fetch Jobs offered by the companies from the database.
    // set the state variables
    setJobs(arr);
  }, []);

  function filteration_01(e) {
    console.log(e.target.value);
    setCategory(e.target.value);
  }
  function filteration_02(e) {
    if (category === 'All') {
      // Fetch all the records from the database and set the react variable setJob
      setJobs(arr);
    } else if (e.target.value === '') {
      // Fetch all the records from the database and set the react variable setJob
      setJobs(arr);
    } else {
      //Fetch Based of the condition
      setJobs(
        arr.filter((item) => {
          if (item.includes(e.target.value.toLowerCase())) {
            return item;
          }
        }),
      );
    }
    console.log(jobs);
  }

  return (
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-2 m-3">
          <select
            id="large"
            class="block py-3 px-4 w-full h-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              filteration_01(e);
            }}
          >
            <option selected>All</option>
            <option value="email">Company</option>
            <option value="jobPosition">Job Position</option>
            <option value="disability">Disability</option>
            <option value="location">Location</option>
          </select>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-1">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative m-3">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="my-3 block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={(e) => {
                filteration_02(e);
              }}
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-3">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Company email
                </th>
                <th scope="col" class="py-3 px-6">
                  Job position
                </th>
                <th scope="col" class="py-3 px-6">
                  Salary
                </th>
                <th scope="col" class="py-3 px-6">
                  description 
                </th>
                <th scope="col" class="py-3 px-6">
                  Qualification
                </th>
                <th scope="col" class="py-3 px-6">
                  Sector
                </th>
                <th scope="col" class="py-3 px-6">
                  Disability
                </th>
                <th scope="col" class="py-3 px-6">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {job}
                    </th>
                    <td class="py-4 px-6">Silver</td>
                    <td class="py-4 px-6">Laptop</td>
                    <td class="py-4 px-6">$2999</td>
                    <td class="py-4 px-6">$2999</td>
                    <td class="py-4 px-6">$2999</td>
                    <td class="py-4 px-6">$2999</td>
                    <td class="py-4 px-6">$2999</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default jobsPage;
