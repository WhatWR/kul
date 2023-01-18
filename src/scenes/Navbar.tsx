import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
type NavbarProps = {
  isTopOfPage: boolean
  selectedPage: string
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>
}

type LinkProps = {
  page: string
  selectedPage: string
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow-300 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-red'

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">
          <AnchorLink href="#home">KB</AnchorLink>
        </h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <AiOutlineMenu />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <AiOutlineClose />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
