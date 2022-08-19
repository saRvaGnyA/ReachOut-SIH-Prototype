import { useState } from 'react';

function PopUpModal(props) {
  console.log(props.selected);

  const apply_for_job = async () => {
    const query = JSON.stringify({
      query: `
      mutation MyMutation {
        insert_application(objects: {job_id: "${props.selected.id}", profile_id: "126427dc-ebc4-4362-8a53-27eb091ed536"}){
            returning {
                id
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
    props.func();
  };

  if (props.registered) {
    return (
      <div class="floating-popup">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                You have already applied for this Job.
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Once You have already applied for the job, you cannot again apply
              for it. Kindly wait for the company to respond to your
              application.
            </p>
            <p
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                props.func();
              }}
            >
              Close
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="floating-popup">
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.selected.company.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {props.selected.description}
            </p>
            <p
              class="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                apply_for_job();
              }}
            >
              Confirm
            </p>
            <p
              class="m-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                props.func();
              }}
            >
              Cancel
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpModal;
