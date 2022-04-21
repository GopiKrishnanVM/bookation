import { navigation, pages } from "@/static/layout.data";
import { classNames } from "@/utility/css-helper";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

type Props = {
  setOpen: (value: boolean) => void;
};

const HeaderComponent: React.FC<Props> = ({ setOpen }) => {
  const router = useRouter();
  return (
    <header className="relative">
      <nav aria-label="Top">
        {/* Top navigation */}

        {/* Secondary navigation */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              {/* Logo (lg+) */}
              <div className="hidden lg:flex-1 lg:flex lg:items-center">
                <NextLink href="#">
                  <>
                    <span className="sr-only">Workflow</span>
                    <Image
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                      width="200px"
                      height="200px"
                      className="h-8 w-auto"
                    ></Image>
                  </>
                </NextLink>
              </div>

              <div className="hidden h-full lg:flex">
                {/* Flyout menus */}
                <Popover.Group className="px-4 bottom-0 inset-x-0">
                  <div className="h-full flex justify-center space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "text-indigo-600"
                                    : "text-gray-700 hover:text-gray-800",
                                  "relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium"
                                )}
                              >
                                {/* {category.name} */}
                                <span
                                  className={classNames(
                                    open ? "bg-indigo-600" : "",
                                    "absolute z-20 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute z-10 top-full inset-x-0 bg-white text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />
                                {/* Fake border when menu is open */}
                                <div
                                  className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                                  aria-hidden="true"
                                >
                                  <div
                                    className={classNames(
                                      open ? "bg-gray-200" : "bg-transparent",
                                      "w-full h-px transition-colors ease-out duration-200"
                                    )}
                                  />
                                </div>

                                <div className="relative">
                                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <Image
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            ></Image>
                                          </div>
                                          <NextLink href={item.href}>
                                            <a className="mt-4 block font-medium text-gray-900">
                                              <span
                                                className="absolute z-10 inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                          </NextLink>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {pages.map((page) => (
                      <NextLink href={page.href} key={page.name}>
                        <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                          {page.name}
                        </a>
                      </NextLink>
                    ))}
                  </div>
                </Popover.Group>
              </div>

              {/* Mobile menu and search (lg-) */}
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Search */}
                <NextLink href="#">
                  <a className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
