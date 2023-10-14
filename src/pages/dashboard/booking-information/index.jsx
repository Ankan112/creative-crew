import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingHistory from "@/pages/booking-history";

const BookingInformation = () => {
  return (
    <div>
      <BookingHistory />
    </div>
  );
};

export default BookingInformation;

BookingInformation.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
