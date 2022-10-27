import Link from "next/link";
import { Children } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// import { Link } from 'react-router-dom';

export default function Layout({Children}:any) {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
            <Link href="/"><MenuItem> HOME</MenuItem></Link>
            <Link href="/"><MenuItem> Prophet</MenuItem></Link>
            <Link href="/neuralprophet"><MenuItem> NeuralProphet</MenuItem></Link>
          
          
        </Menu>
        {/* <Menu>
          <MenuItem routerLink={<Link href="/documentation">Documentation2Link</Link>}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem routerLink={<Link href="/calendar">Calendar</Link>}></MenuItem>
           <MenuItem routerLink={<Link href="/e-commerce">E-commerce</Link>}>
            {" "}
            E-commerce
          </MenuItem> 
        </Menu> */}
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
  
      
    </div>
  );
}
