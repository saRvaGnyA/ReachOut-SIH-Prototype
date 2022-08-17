import { Auth, Typography, Button } from '@supabase/ui';
import { supabase } from '../utils/supabaseClient';

const Home = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <div className="lg:p-20 flex justify-center items-center my-10 lg:my-0">
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </div>
    );
  return (
    <section className="lg:p-20 flex justify-center items-center my-10 lg:my-0">
      <article className="lg:w-2/3">{props.children}</article>
    </section>
  );
};

export default function logi() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Home supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
      </Home>
    </Auth.UserContextProvider>
  );
}
