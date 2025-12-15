import Breadcrumbs from "@/modules/components/shared/breadcrumbs";
import CoinsCredits from "@/modules/components/sidebar/coins-credits";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <Breadcrumbs />
      <h1 className="text-primary text-center text-2xl font-semibold">
        Dashboard Page
      </h1>
      <h2>Welcome love and abundance</h2>
    </div>
  );
};

export default DashboardPage;
