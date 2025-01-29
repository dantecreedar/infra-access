import SIdebar from '../../components/SIdebar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <div
      style={{ backgroundColor: '#E2E1CD' }}
      className="overflow-y-hidden w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white"
    >
      <div className="relative z-20">
        
      </div>
      <div className="flex w-screen h-full relative">
        <div className="z-10">
          <SIdebar />
        </div>
        <div className="w-full p-4 flex flex-col">{children}</div>
      </div>
    </div>
  );
};
