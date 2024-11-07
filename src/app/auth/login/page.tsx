import Header from "@app/features/landing-page/components/Header";
import LoginForm from "@app/features/authentication/components/LoginForm";

const page = () => {
  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  );
};

export default page;
