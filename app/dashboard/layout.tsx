import SideNav from '@/app/ui/dashboard/sidenav';
 
<<<<<<< HEAD
export const experimenta_ppr = true;
=======
const experimental_ppr = true;
>>>>>>> 23483943df099408e5239dfcf880d4af810dbf08
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}