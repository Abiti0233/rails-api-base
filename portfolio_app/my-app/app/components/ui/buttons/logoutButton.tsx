import { handleSignOut } from "../../features/dashboard/logout";

export default function LogoutButton() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignOut();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">ログアウト</button>
      </form>
    </div>
  );
}