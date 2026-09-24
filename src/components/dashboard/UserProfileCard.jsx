import Avatar from "../common/Avatar.jsx";
import Button from "../common/Button.jsx";

export default function UserProfileCard({ user }) {
  return (
    <section className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <Avatar name={user.name} size="lg" />
      <h2 className="mt-3 text-base font-semibold">{user.name}</h2>
      <p className="text-sm text-slate-500">{user.email}</p>
      <p className="mt-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{user.role}</p>

      <div className="mt-5 w-full text-left">
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="text-slate-600">Profile completion</span>
          <span className="font-medium">{user.completion}%</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={user.completion}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Profile completion"
          className="h-2 overflow-hidden rounded-full bg-slate-100"
        >
          <div className="h-full rounded-full bg-indigo-500 transition-all duration-700" style={{ width: `${user.completion}%` }} />
        </div>
      </div>

      <Button className="mt-5 w-full">View profile</Button>
    </section>
  );
}
