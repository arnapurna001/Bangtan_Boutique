import { AuthLayout } from '@/components/layout/auth-layout';
import { AuthForm } from '@/components/auth/auth-form';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Join the ARMY and get access to exclusive merch."
    >
      <AuthForm type="signup" />
    </AuthLayout>
  );
}
