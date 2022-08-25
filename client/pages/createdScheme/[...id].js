import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const createdScheme = () => {
  const router = useRouter();
  const [applications, setApplications] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getBeneficiaries = async () => {
    const query = JSON.stringify({
      query: `query MyQuery {
  beneficiary(where: {scheme_id: {_eq: "${router.query.id}"}}) {
    id
    justification
    scheme_id
    profile_id
    status
    profile {
      last_name
      first_name
      aadhar
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
    setApplications(responseJson.data.beneficiary);
    setIsLoading(false);
  };

  useEffect(() => {
    getBeneficiaries();
  }, []);

  const accept = async (id) => {
    const query = JSON.stringify({
      query: `mutation MyMutation {
  update_beneficiary(where: {id: {_eq: "${id}"}}, _set: {status: 1}) {
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
  };

  const reject = async (id) => {
    const query = JSON.stringify({
      query: `mutation MyMutation {
  update_beneficiary(where: {id: {_eq: "${id}"}}, _set: {status: 2}) {
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
  };

  if (isLoading) {
    return <h1 className="text-3xl text-center p-3">Loading...</h1>;
  }

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Applicant name
              </th>
              <th scope="col" className="py-3 px-6">
                View Documents for Verification
              </th>
              <th scope="col" className="py-3 px-6">
                Aadhar Card Number
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => {
              return (
                <tr
                  key={application.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {`${application.profile.first_name} ${application.profile.last_name}`}
                  </th>
                  <td className="py-4 px-6">
                    <a
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      href={`https://rymsimuithtpkvfhmrtf.supabase.co/storage/v1/object/public/certificate/public/${application.profile_id}.pdf`}
                      target="_blank"
                    >
                      View Disability Certificate
                    </a>
                  </td>
                  <td className="py-4 px-6">
                    <p className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {application.profile.aadhar}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <p
                      onClick={() => {
                        if (application.status === 0) {
                          application.status = 1;
                          accept(application.id);
                        }
                      }}
                      className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${
                        application.status !== 0
                          ? 'cursor-not-allowed'
                          : 'cursor-pointer'
                      }`}
                    >
                      Approve Beneficiary <br />
                    </p>
                    <p
                      onClick={() => {
                        if (application.status === 0) {
                          application.status = 2;
                          reject(application.id);
                        }
                      }}
                      className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${
                        application.status !== 0
                          ? 'cursor-not-allowed'
                          : 'cursor-pointer'
                      }`}
                    >
                      Reject
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default createdScheme;
