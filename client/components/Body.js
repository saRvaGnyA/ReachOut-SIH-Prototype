import Image from 'next/image';

function Body() {
  return (
    <div class="bg-zinc-600">
      <section class="text-gray-400 bg-gray-100 dark:bg-gray-900 body-font ">
        <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-5xl mb-4 font-medium text-purple-400">
              ReachOut
              <br class="hidden lg:inline-block text-white" />
            </h1>
            <h2>Your one stop go!</h2>
            <h2 class="mb-8 leading-relaxed">
              ReachOut aims to be a one-stop Progressive Web App (PWA) that
              provides details of various schemes by Govt. of India for
              specially abled people. It also acts as a portal for employment
              needs of the specially abled. It helps connect the government and
              the companies with the disabled workforce while promoting a
              positive environment for people wih special needs to interact. .
            </h2>
          </div>
          <div class="lg:max-w-lg md:w-1/2 w-5/6  object-center relativerounded-full border-gray-300 outline-none bg-white overflow-hidden ">
            <Image
              src="/HomePageImg.jpeg"
              width={600}
              height={500}
              className="object-cover object-center"
              alt="FlowBite Logo"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section class="bg-gray-100 text-zinc-900 dark:text-gray-400 dark:bg-gray-900 body-font">
        <div class="container px-5 py-44 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p class="leading-relaxed">
                    SignUp on the portal to benefit from the government Schemes
                    and apply for a job.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p class="leading-relaxed">
                    Filter out the government schemes available according to
                    your choice.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p class="leading-relaxed">
                    Apply for the perfect job opportunity you are looking for
                    from thousand of job opportunities available.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p class="leading-relaxed">
                    Fill up your details to benefit from the government schemes
                    and avail new job opportunities.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm dark:text-white mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p class="leading-relaxed">
                    Rest assured as the company contacts you back in a while.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/recruitment/recruitment-software-main-slider.png"
              alt="step"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5  mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Features of ReachOut
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              After logged in user can avail various governmetn schemes , apply
              to to job's available.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://tse3.mm.bing.net/th?id=OIP.10RJysmf12hywtib0y57FgHaHa&pid=Api&P=0"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 class="tracking-widest title-font text-lg text-indigo-400 mb-1">
                    Job Oppertunities
                  </h1>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    Get your Dream Job
                  </h1>
                  <p class="leading-relaxed">
                    Register yourself for the perfect job oppertunities waiting
                    just for you!.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center object-fit"
                  src="https://tse4.mm.bing.net/th?id=OIP.vq-1vqXhrRfBER8aP6Am4AHaD3&pid=Api&P=0"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 class="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">
                    Government Schemes
                  </h1>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    Get aware of your rights!
                  </h1>
                  <p class="leading-relaxed">
                    Benefit yourself from all the government schemes available
                    for you.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://tse4.mm.bing.net/th?id=OIP.6vCfZ95RrqqMQdnLwJWDJAHaE7&pid=Api&P=0"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 class="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">
                    Nearest Job
                  </h1>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    Find out the nearest job available
                  </h1>
                  <p class="leading-relaxed">
                    find out the nearby job oppertunities available from your
                    location.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://tse1.mm.bing.net/th?id=OIP.x6cFBl7B2EyHH4wge5V7qgHaDt&pid=Api&P=0"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">
                    Put up Job offer
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    Get perfect candidates
                  </h1>
                  <p class="leading-relaxed">
                    Companies can put up job offers and look for hiring new
                    recruiters.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://tse3.mm.bing.net/th?id=OIP.jssGgKh1PInTDNjuSB-A_AHaEc&pid=Api&P=0"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">
                    Add New Schemes
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3"></h1>
                  <p class="leading-relaxed">
                    Government ministries can add new schemes for the disabled
                    people.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/606x366"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
