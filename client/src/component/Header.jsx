import React from 'react'
import { Button, Navbar ,TextInput} from 'flowbite-react';
import { Link,useLocation} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/Logo.png';

function Header() {
    const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center'>
            <img src={logo} className='rounded-xl w-[150px] md:w-[120px]'></img>
        </Link>

        <Navbar.Collapse className='hidden lg:inline'>
                <Navbar.Link active={ path === "/" } as={"div"}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/about" } as={"div"}>
                    <Link to="/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/project" } as={"div"}>
                    <Link to="/project">
                        Project
                    </Link>
                </Navbar.Link>
        </Navbar.Collapse>

        <form>
            <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>

        <div className='flex items-center gap-2 md:order-2'>
            <Button className='w-10 h-10' color='gray' pill>
                <FaMoon/>
            </Button>

            <Link to="/sign-in">
                <Button gradientDuoTone='purpleToBlue' outline> 
                    Sign In
                </Button>
            </Link>

            <Navbar.Toggle />
        </div>

        <Navbar.Collapse className='md:hidden'>
                <Navbar.Link active={ path === "/" } as={"div"}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/about" } as={"div"}>
                    <Link to="/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/project" } as={"div"}>
                    <Link to="/project">
                        Project
                    </Link>
                </Navbar.Link>
        </Navbar.Collapse>
        
    </Navbar>
  )
}

export default Header