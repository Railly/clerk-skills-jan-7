import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">Select an Organization</h1>
      <p className="text-gray-600 mb-8">
        Please select or create an organization to continue to the dashboard.
      </p>
      <OrganizationList
        afterSelectOrganizationUrl="/dashboard"
        afterCreateOrganizationUrl="/dashboard"
      />
    </main>
  );
}
