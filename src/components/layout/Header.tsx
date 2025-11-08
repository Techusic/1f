import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">O</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">OneFlow</h1>

          {/* Persistent top navigation links - visible on md+ */}
          <nav className="hidden md:flex items-center gap-3 ml-6">
            <NavLink to="/projects" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Projects</NavLink>
            <NavLink to="/tasks" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Tasks</NavLink>
            <NavLink to="/tracking" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Tracking</NavLink>
            <NavLink to="/sales-orders" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Orders</NavLink>
            <NavLink to="/expenses" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Expenses</NavLink>
            <NavLink to="/products" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Products</NavLink>
            <NavLink to="/vendors" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Vendors</NavLink>
            <NavLink to="/invoices" className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" activeClassName="bg-primary text-primary-foreground">Invoices</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Modules dropdown (hidden on very small screens) */}
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">Modules</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover">
                <DropdownMenuLabel>Go to</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/projects')}>Projects</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/tasks')}>Tasks</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/tracking')}>Tracking</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/sales-orders')}>Sales</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/purchase-orders')}>Purchases</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/expenses')}>Expenses</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/products')}>Products</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/vendors')}>Vendors</DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/invoices')}>Invoices</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
