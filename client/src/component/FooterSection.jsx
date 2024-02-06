import React from 'react'
import { Footer } from 'flowbite-react'
import { Link,useLocation} from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import logo from '../assets/Logo.png'

function FooterSection() {
  return (
    <Footer container className='border border-t-8'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='flex w-full justify-between gap-5 flex-col md:flex-row'>
          <div className='mt-5'>
            <Link to="/" className='self-center'>
              <img src={logo} className='rounded-xl w-[100px]'></img>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            <div>
              <Footer.Title title='About'/>
                <Footer.LinkGroup className='flex flex-col gap-2'>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Follow us'/>
                <Footer.LinkGroup className='flex flex-col gap-2'>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='LEGAL'/>
                <Footer.LinkGroup className='flex flex-col gap-2'>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href='https://thisohm.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thisohm Portfolio
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="flex flex-col md:gap-2 md:flex-row md:justify-between md:items-center">
          <div className="">
            <Footer.Copyright 
              href='#' 
              by="Thisohm blog" 
              year={new Date().getFullYear()}
            />
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsFacebook}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterSection