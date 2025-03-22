import Image from "next/image";
import Link from "next/link";

interface NavItem {
  href: string;
  icon: string; // now this is a string path
  label: string;
  className?: string;
}

const navItems: NavItem[] = [
  {
    href: "/admin-dashboard",
    icon: "/svg/dashboardIcon.svg",
    label: "Dashboard",
    className: "bg-[#1E0B40] border border-[#807F8D]",
  },
  {
    href: "/admin-dashboard/assets",
    icon: "/svg/assetsIcon.svg",
    label: "Assets",
  },
  {
    href: "/admin-dashboard/plans",
    icon: "/svg/plansIcon.svg",
    label: "Plans",
  },
  {
    href: "/admin-dashboard/exchange",
    icon: "/svg/exchangeIcon.svg",
    label: "Exchange",
  },
  {
    href: "/admin-dashboard/claims",
    icon: "/svg/claimsIcons.svg",
    label: "Claims",
  },
  {
    href: "/admin-dashboard/advisory",
    icon: "/svg/advisoryIcons.svg",
    label: "Advisory",
  },
];

export default function AdminDashboardSidebar() {
  return (
    <nav className="p-4">
      <div className="w-64 rounded-xl h-full border border-[#413F54] bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_52%,rgba(20,16,26,1)_100%)] flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            {" "}
            <Link href="/">
              <Image
                src="/svg/whitelogo.svg"
                width={19}
                height={6}
                className=" h-[40px]  w-fit"
                alt="Logo"
              />
            </Link>
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map(({ href, icon, label, className }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 p-3 ${className} text-white hover:bg-[#1E0B40] rounded-md transition-colors`}
            >
              <Image src={icon} alt={`${label} icon`} width={20} height={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom links */}
        <div className="mt-auto px-4 pb-6 space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 p-3 text-white hover:bg-[#1E0B40] rounded-md transition-colors"
          >
            <Image
              src="/svg/profileIcon.svg"
              alt="Profile Icon"
              width={20}
              height={20}
            />
            <span>Profile</span>
          </Link>

          <Link
            href="/admin-dashboard/support"
            className="flex items-center gap-3 p-3 text-white hover:bg-[#1E0B40] rounded-md transition-colors"
          >
            <Image
              src="/svg/supportIcon.svg"
              alt="Support Icon"
              width={20}
              height={20}
            />
            <span>Support</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
