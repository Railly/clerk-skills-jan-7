import { auth } from "@clerk/nextjs/server";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export default async function DashboardPage() {
  const { userId, orgId, orgSlug } = await auth();

  return (
    <main className="min-h-screen p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher
            afterSelectOrganizationUrl="/dashboard"
            afterCreateOrganizationUrl="/dashboard"
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Session Info</h2>
        <dl className="space-y-2">
          <div className="flex gap-2">
            <dt className="font-medium">User ID:</dt>
            <dd className="text-gray-600 font-mono">{userId}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium">Organization ID:</dt>
            <dd className="text-gray-600 font-mono">{orgId}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium">Organization Slug:</dt>
            <dd className="text-gray-600 font-mono">{orgSlug || "N/A"}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
