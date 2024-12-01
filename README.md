the project Architecture:

FoxCore.Client/                  # Client-side Blazor WebAssembly project
├── Layout/                       # Layout components for different user roles
│   ├── AdminLayout.razor         # Layout for Admin section (sidebar, navbar, etc.)
│   ├── EmployeeLayout.razor      # Layout for Employee section (sidebar, navbar, etc.)
│   └── MainLayout.razor          # Main layout for common pages (like home, about, landing page)
├── Pages/                        # Pages directory
│   ├── Admin/                    # Admin-specific pages
│   │   ├── AdminDashboard.razor         # Admin dashboard page
│   │   ├── ManageUsers.razor           # Manage users (CRUD for users)
│   │   ├── ManageInventory.razor       # Manage inventory (CRUD for items)
│   │   ├── ManageSalesOrders.razor     # Manage sales orders (CRUD)
│   │   └── AdminSettings.razor         # Settings for the admin
│   ├── Employee/                  # Employee-specific pages
│   │   ├── EmployeeDashboard.razor     # Dashboard for employees
│   │   ├── MyProfile.razor            # Employee's profile page
│   │   ├── TimeTracking.razor         # Time tracking for employees
│   │   ├── Attendance.razor           # Attendance management
│   ├── Auth/                      # Authentication pages (Login and Register)
│   │   ├── Login.razor                  # Login page for all users (Admin/Employee)
│   │   └── Register.razor               # Registration page for new users
│   ├── Common/                     # Common pages for all users
│   │   ├── Home.razor                # Homepage for the app
│   │   ├── About.razor               # About page (can be used for company info)
│   │   ├── LandingPage.razor         # Landing page (introduction or welcome page)
│   └── Shared/                      # Shared components
│       ├── NavMenu.razor           # Main navigation menu (with links to pages)
│       └── Footer.razor            # Footer component
├── Components/                    # Reusable components (e.g., form controls, modals)
│   ├── Shared/
│   │   ├── Modal.razor              # Modal dialog component
│   │   ├── Pagination.razor         # Pagination component for tables
│   │   └── Card.razor               # Card component for displaying information
└── wwwroot/                       # Static files (CSS, JS)
    ├── css/                        # CSS files for styling
    └── js/                         # JavaScript files (if necessary)
