interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      <div className="min-w-[30%] max-w-[40%] bg-white rounded-lg shadow shadow-slate-200">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
