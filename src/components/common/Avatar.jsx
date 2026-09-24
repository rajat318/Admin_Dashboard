const sizes = { sm: "h-8 w-8 text-xs", md: "h-9 w-9 text-sm", lg: "h-20 w-20 text-2xl" };

const getInitials = (name) =>
  name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

export default function Avatar({ name, size = "md" }) {
  return (
    <span
      role="img"
      aria-label={`Avatar of ${name}`}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 ${sizes[size]}`}
    >
      {getInitials(name)}
    </span>
  );
}
