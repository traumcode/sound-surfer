import { useRef, useState } from 'react';
import { useAuthState } from '~/contexts/UserContext';
import { SignInButton } from '~/auth/SignInButton';
import { SignOutButton } from '~/auth/SignOutButton';
import { Head } from '~/shared/Head';
import Hero from '~/components/Hero';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="hero min-h-screen">
        <Hero/>
      </div>
      
    </>
  );
}

export default Index;
