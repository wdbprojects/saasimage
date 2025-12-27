import { getUserDataAction } from "@/_actions/user-actions";
import SettingsForm from "@/modules/components/dashboard/settings-form";

const SettingsPage = async () => {
  let currentUser: { name: string | undefined; email: string | undefined } = {
    name: "",
    email: "",
  };
  const user = await getUserDataAction("lM4tmmkPEEuNO8XxIvo1svvgSII862h4");
  if (user?.success) {
    currentUser = { name: user.data?.name, email: user.data?.email };
  }

  console.log(currentUser);

  return (
    <div className="mt-6">
      <h1 className="text-primary text-start text-2xl font-semibold">
        Account Settings
      </h1>
      <p className="text-sm tracking-normal">
        Manage your account preferences and security settings
      </p>

      <SettingsForm
        name={currentUser.name}
        email={currentUser.email}
        id={user.data?.id}
      />
    </div>
  );
};

export default SettingsPage;

/* if (response.success) {
        currentUser = {
          name: response.name,
          email: response.email,
          password: response.password,
        };
      } */
