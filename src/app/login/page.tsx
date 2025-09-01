import { AuthLayout } from '@/components/layout/auth-layout';
import { AuthForm } from '@/components/auth/auth-form';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back!"
      description="Sign in to your account to continue."
    >
      <AuthForm type="login" />
    </AuthLayout>
  );
}
