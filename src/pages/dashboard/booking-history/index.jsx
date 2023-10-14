import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardBookingHistory from "@/pages/booking-history";
const BookingHistory = () => {
  return (
    <div>
      <DashboardBookingHistory></DashboardBookingHistory>
    </div>
  );
};

export default BookingHistory;

BookingHistory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
