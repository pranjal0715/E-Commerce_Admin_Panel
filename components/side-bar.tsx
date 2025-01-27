import Link from "next/link"
import {
  LayoutDashboard,
  Store,
  Menu,
  Flag,
  Package,
  Tags,
  Boxes,
  FolderTree,
  ShoppingCart,
  Users,
  Ticket,
  Receipt,
} from "lucide-react"
// import { logo} from "../assets/logo.png"

const menuItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", href: "/" },
  { icon: <Store className="w-5 h-5" />, label: "Shops", href: "/shops", badge: "Explore" },
  { icon: <Store className="w-5 h-5" />, label: "My Shops", href: "/my-shops" },
  { icon: <Menu className="w-5 h-5" />, label: "Menu Builders", href: "/menu-builders" },
  { icon: <Flag className="w-5 h-5" />, label: "Banner", href: "/banner" },
  { icon: <Package className="w-5 h-5" />, label: "Products", href: "/products" },
  { icon: <Tags className="w-5 h-5" />, label: "Attributes", href: "/attributes" },
  { icon: <Boxes className="w-5 h-5" />, label: "Product Types", href: "/product-types" },
  { icon: <FolderTree className="w-5 h-5" />, label: "Categories", href: "/categories" },
  { icon: <FolderTree className="w-5 h-5" />, label: "Sub Category", href: "/sub-category" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Orders", href: "/orders" },
  { icon: <Receipt className="w-5 h-5" />, label: "Order Status", href: "/order-status" },
  { icon: <Users className="w-5 h-5" />, label: "Users", href: "/users" },
  { icon: <Ticket className="w-5 h-5" />, label: "Coupons", href: "/coupons" },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-6">
        <img
          src="file:///D:/Private/Admin%20Panel/admin/assets/logo.png"
          alt="Logo"
          className="h-8"
        />
      </div>
      <nav className="px-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            {item.icon}
            <span>{item.label}</span>
            {item.badge && (
              <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full ml-auto">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}

