import ProfileForm from '../features/profile/components/ProfileForm.jsx';
import { pageContainer } from '../features/profile/styles/profileFormStyles.js';

export default function ProfilePage() {
  return (
    <main style={pageContainer}>
      <ProfileForm />
    </main>
  );
}