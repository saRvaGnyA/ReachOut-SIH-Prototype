import { useState, useEffect } from 'react';

function CompanyProfile() {
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [phone, setPhone] = useState(8888888888);
  const [date, setDate] = useState('');
  const [locations, setLocations] = useState(1);
  const [mission, setMission] = useState('');
  const [address, setAddress] = useState();
  const [base64, setBase64] = useState();

  useEffect(() => {}, []);

  function formResponse(e) {
    e.preventDefault();
    if (edit) {
      setEdit(false);
      // Save Changes into the database;
      const obj = {
        name,
        email,
        url,
        phone,
        date,
        locations,
        mission,
        address,
      };
      console.log(obj);
    } else {
      setEdit(true);
    }
  }
  function formResponse2(e) {
    e.preventDefault();
    if (edit2) {
      setEdit2(false);
    } else {
      setEdit2(true);
    }
  }
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
  return (
    <div>
      <div class="p-10">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h1 class="text-3xl font-medium leading-6 text-gray-900 dark:text-white p-x-2">
                Profile
              </h1>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6 dark:bg-zinc-800">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-white">
                      {' '}
                      Photo{' '}
                    </label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-white">
                      {' '}
                      Upload Article of association of the company{' '}
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
                              disabled={!edit2}
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
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-zinc-800">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={formResponse2}
                  >
                    {edit2 ? 'Save' : 'Edit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0 p-10">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-3xl font-medium leading-6 text-gray-900 dark:text-white">
                Company Information
              </h3>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                ( This will be the details shown to the other users and
                companies )
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2 ">
            <form class="shadow sm:rounded-md sm:overflow-hidden p-5 border-gray-300 dark:bg-zinc-800">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="company_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Google"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="company_email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company email
                  </label>
                  <input
                    type="email"
                    id="company_email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="google@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="company_url"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company's website URL
                  </label>
                  <input
                    type="url"
                    id="company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="google.com"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="contact_number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company's contact number
                  </label>
                  <input
                    type="tel"
                    id="contact_number"
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
                    for="establishment_date"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Establishment date
                  </label>
                  <input
                    type="date"
                    id="website"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="flowbite.com"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
                <div>
                  <label
                    for="locations"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Number of branches
                  </label>
                  <input
                    type="number"
                    min="1"
                    id="locations"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={locations}
                    onChange={(e) => {
                      setLocations(e.target.value);
                    }}
                    disabled={!edit}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {' '}
                  About{' '}
                </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                    placeholder=" Location 1,
                    Location 2,"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    disabled={!edit}
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
                  ( Enter each Location in new line adding comma at the end of
                  line )
                </p>
                <br />
              </div>
              <div class="mb-6">
                <label
                  for="mission"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Company's mission
                </label>
                <input
                  type="text"
                  id="mission"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type your motive here ..."
                  value={mission}
                  onChange={(e) => {
                    setMission(e.target.value);
                  }}
                  disabled={!edit}
                  required
                />
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

export default CompanyProfile;