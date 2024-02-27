"use client"
import React from "react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Nav() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { status, data } = useSession();
  console.log(status);
 
  const router = useRouter();
  
  // const menuItems = [
  //   "Login",
  //   "Sign Up",
  // ];
  const pathName=usePathname();
  switch (pathName) {
    case "/login":
      return null;
    case "/register":
      return null;
    default:
       return (
    <div>
    {/* // <Navbar onMenuOpenChange={setIsMenuOpen}> */}
   
    <Navbar>

      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen && status=="authenticated" ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand className="cursor-pointer" onClick={()=>router.push('/')}>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">CUTS</p>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="sm:flex gap-4 hidden " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      {
        status == "authenticated" ?
          (
            <NavbarContent as="div" justify="end">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Default avatar"
                    size="sm"
                    src="default_avatar.png"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{data.user.email}</p>
                  </DropdownItem>
                  <DropdownItem key="settings" onClick={()=>router.push('/profile')}>My Profile</DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={()=>signOut({callbackUrl:'/'})} >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          ) :
          status == "loading" ?
            (
              <NavbarContent as="div" justify="end">
                {/* <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Loading...</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
              </NavbarContent>
            ) : 
              (
                <NavbarContent className="sm:flex gap-4" justify="end">
                  <NavbarItem className="lg:flex">
                    <Link href="/login">Login</Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button as={Link} color="primary" href="/register" variant="flat">
                      Sign Up
                    </Button>
                  </NavbarItem>
                </NavbarContent>
              )
      }



      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  
   </div>
  );
    }
}
