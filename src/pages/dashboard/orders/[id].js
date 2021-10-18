import Layout from '../../../components/template/Layout';

export default function ConfirmOrderPage() {
  return (
    <Layout
      title="Confirm Orders"
      email={user.email}
      notification={user.general_notification}
    ></Layout>
  );
}
