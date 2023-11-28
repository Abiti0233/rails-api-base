import { signOut } from "../../auth";
import Footer from "../components/ui/footer";
import LoginHeader from "../components/ui/loginHeader";

export default function Page() {
  return (
    <div>
      <LoginHeader />
      <Footer />
    </div>
  );
}
