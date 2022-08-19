import { useState, useEffect } from 'react';
import { Auth } from '@supabase/ui';
import { supabase } from '../../utils/supabaseClient';

function UserProfile({ user }) {
  const [edit, setEdit] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [firstName, setFirstName] = useState(''); //
  const [lastName, setLastName] = useState(''); //
  const [phone, setPhone] = useState(8888888888); //
  const [disabilityType, setDisabilityType] = useState(''); //
  const [severity, setSeverity] = useState(''); //
  const [age, setAge] = useState(18);
  const [aadhar, setAadhar] = useState(888888888888); //
  const [disability, setDisability] = useState(''); //
  const [location, setLocation] = useState(''); //
  const [qualifications, setQualifications] = useState('');

  const setupUser = async () => {
    console.log(user.id);
    const query = JSON.stringify({
      query: `query MyQuery {
  profile(where: {id: {_eq: "${user.id}"}}) {
    id
    aadhar
    age
    disability
    disability_type
    first_name
    last_name
    mobile
    place
    qualifications
    severity
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
    if (responseJson.data.profile.length !== 0) {
      const u = responseJson.data.profile[0];
      setFirstName(u.first_name);
      setLastName(u.last_name);
      setPhone(u.mobile);
      setDisability(u.disability);
      setSeverity(u.severity);
      setAadhar(u.aadhar);
      setLocation(u.place);
      setDisabilityType(u.disability_type);
      setQualifications(u.qualifications);
    } else {
      setNewUser(true);
      setEdit(true);
    }
  };

  useEffect(() => {
    //fetch the data from database.
    //set the values of the state variables.
    setupUser();
  }, []);

  function fileSelectedHandler(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (FileLoadEvent) {
      var srcData = FileLoadEvent.target.result;
      setBase64(srcData);
      console.log(base64);
    };
    reader.readAsDataURL(file);
  }

  const submitForm = async () => {
    let query;
    if (newUser) {
      query = JSON.stringify({
        query: `mutation MyMutation {
        insert_profile(objects: {aadhar: "${aadhar}", age: "${age}", disability: "${disability}", disability_type: "${disabilityType}", first_name: "${firstName}", last_name: "${lastName}", mobile: "${phone}", place: "${location}", qualifications: "${qualifications}", severity: "${severity}", id: "${user.id}"}) {
          returning {
            id
          }
        }
      }
      `,
      });
      setNewUser(false);
    } else {
      query = JSON.stringify({
        query: `mutation MyMutation {
        update_profile(where: {id: {_eq: "${user.id}"}}, _set: {aadhar: "${aadhar}", age: "${age}", disability: "${disability}", disability_type: "${disabilityType}", first_name: "${firstName}", last_name: "${lastName}", mobile: "${phone}", place: "${location}", qualifications: "${qualifications}", severity: ${severity}}) {
          returning {
            id
          }
        }
      }
      `,
      });
    }

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
  };

  function formResponse(e) {
    e.preventDefault();
    if (edit) {
      setEdit(false);
      const obj = {
        firstName,
        lastName,
        phone,
        disability,
        severity,
        aadhar,
        disabilityType,
        location,
      };
      console.log(obj);
      //submit the changes made to the database.
      submitForm();
    } else {
      setEdit(true);
    }
  }

  // if (!user) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div class="mt-10 sm:mt-0 p-10">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-3xl font-medium leading-6 text-gray-900 dark:text-white">
                Personal Information
              </h3>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2 ">
            <form class="shadow sm:rounded-md sm:overflow-hidden p-5 border-gray-300 dark:bg-zinc-800">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Harshad"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    disabled={!edit}
                    onFocus={() => {
                      // speak({
                      //   text: 'Enter the first name',
                      // });
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mehta"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="8888888888"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="default"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Disability Type
                  </label>
                  <select
                    id="default"
                    class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={disabilityType}
                    onChange={(e) => {
                      setDisabilityType(e.target.value);
                    }}
                    disabled={!edit}
                  >
                    <option selected>Choose appropriate option</option>
                    <option value="Physical">Physical</option>
                    <option value="Sensory">Sensory</option>
                    <option value="Mental">Mental</option>
                    <option value="Intellectual">Intellectual</option>
                  </select>
                </div>
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="severity"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Severity of corresponding disability (Out of 10)
                  </label>
                  <input
                    type="number"
                    id="severity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={severity}
                    onChange={(e) => {
                      setSeverity(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="age"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="aadhar_number"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Aadhar number
                </label>
                <input
                  type="text"
                  id="aadhar_number"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="8888 8888 8888"
                  value={aadhar}
                  onChange={(e) => {
                    setAadhar(e.target.value);
                  }}
                  disabled={!edit}
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="disability"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Disability
                </label>
                <input
                  type="text"
                  id="disability"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Physical"
                  value={disability}
                  onChange={(e) => {
                    setDisability(e.target.value);
                  }}
                  disabled={!edit}
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="location"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Address of the applicant (Location will cover the jobs within
                  50kms)
                </label>
                <input
                  type="text"
                  id="location"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mumbai"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  disabled={!edit}
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="qualifications"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Qualifications
                </label>
                <input
                  type="text"
                  id="qualifications"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="10th Pass"
                  value={qualifications}
                  onChange={(e) => {
                    setQualifications(e.target.value);
                  }}
                  disabled={!edit}
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-white">
                  {' '}
                  Upload appropriate document that proves the your disability{' '}
                </label>
                <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                          onChange={fileSelectedHandler}
                          disabled={!edit}
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-white pt-5">
                  {' '}
                  Upload your resume{' '}
                </label>
                <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                          onChange={fileSelectedHandler}
                          disabled={!edit}
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-zinc-800">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    formResponse(e);
                  }}
                >
                  {edit ? 'Save' : 'Edit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function logi({ user }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <UserProfile supabaseClient={supabase} user={user}>
        <Auth supabaseClient={supabase} />
      </UserProfile>
    </Auth.UserContextProvider>
  );
}
