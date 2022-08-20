import Image from 'next/image';

function Body() {
  return (
    <div className="bg-zinc-600">
      <section className="text-gray-400 bg-gray-100 dark:bg-gray-900 body-font ">
        <img
          src="https://mcmscache.epapr.in/post_images/website_350/post_24558985/full.jpg"
          className="object-cover object-center"
          width="100%"
          alt="FlowBite Logo"
          objectFit="contain"
        />
      </section>
      <section className="bg-gray-100 text-zinc-900 dark:text-gray-400 dark:bg-gray-900 body-font">
        <div className="container px-5 py-44 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    SignUp on the portal to benefit from the government Schemes
                    and apply for a job.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Filter out the government schemes available according to
                    your choice.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Apply for the perfect job opportunity you are looking for
                    from thousand of job opportunities available.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    Fill up your details to benefit from the government schemes
                    and avail new job opportunities.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Rest assured as the company contacts you back in a while.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/recruitment/recruitment-software-main-slider.png"
              alt="step"
            />
          </div>
        </div>
      </section>
      <section className="text-zinc-900 bg-gray-100 dark:text-gray-400 dark:bg-gray-900 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-zinc-900">
              Features of ReachOut
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              After logged in user can avail various government schemes , apply
              to to job's available.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://tse3.mm.bing.net/th?id=OIP.10RJysmf12hywtib0y57FgHaHa&pid=Api&P=0"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Get your Dream Job
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Register yourself for the perfect job oppertunities waiting
                  just for you!.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtgQEv2gCHbyF4m-E2-5TDd-T2gucPpCHLB16TmthOY9vIMCVqZfA-Buf5ZWEuNQ8aQY&usqp=CAU"
                  width="100%"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Get Opportunities
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Get access to various opportunities which are hard to find
                  anywhere.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://tse4.mm.bing.net/th?id=OIP.6vCfZ95RrqqMQdnLwJWDJAHaE7&pid=Api&P=0"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nearest Job
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Find out the nearby job oppertunities available from your
                  location.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://tse1.mm.bing.net/th?id=OIP.x6cFBl7B2EyHH4wge5V7qgHaDt&pid=Api&P=0"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Put up Job offer
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Companies can put up job offers and look for hiring new
                  recruiters.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://tse3.mm.bing.net/th?id=OIP.jssGgKh1PInTDNjuSB-A_AHaEc&pid=Api&P=0"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add New Schemes
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Government ministries can add new schemes for the disabled
                  people.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://tse4.mm.bing.net/th?id=OIP.vq-1vqXhrRfBER8aP6Am4AHaD3&pid=Api&P=0"
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Government Schemes
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Benefit yourself from all the government schemes available for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
