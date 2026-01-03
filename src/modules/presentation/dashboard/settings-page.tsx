import { getUserDataAction } from "@/_actions/user-actions";
import SettingsForm from "@/modules/components/dashboard/settings-form";

const SettingsPage = async () => {
  let currentUser: { name: string | undefined; email: string | undefined } = {
    name: "",
    email: "",
  };
  const user = await getUserDataAction("RRZPwA5D3C03gqvEdD8JbLC8FQgawBnx");
  if (user?.success) {
    currentUser = { name: user?.data?.name, email: user?.data?.email };
  }

  return (
    <div className="mt-6">
      <h1 className="text-primary text-start text-2xl font-semibold">
        Account Settings
      </h1>
      <p className="text-sm tracking-normal">
        Manage your account preferences and security
      </p>
      <SettingsForm
        name={currentUser.name}
        email={currentUser.email}
        id={user?.data?.id}
      />
    </div>
  );
};

export default SettingsPage;
