import AdminAside from "@/components/admin/admin-aside";
import AdminHeader from "@/components/admin/admin-header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <AdminHeader></AdminHeader>
    <div className="flex flex-1 pt-16">
      <AdminAside></AdminAside>
      {children}
    </div>
  </>
  );
}
