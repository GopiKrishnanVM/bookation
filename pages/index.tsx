import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";

import MobileHeaderComponent from "@/components/layout/mobile-header.component";
import HeaderComponent from "@/components/layout/header.component";
import FooterComponent from "@/components/layout/footer.component";
import NextLink from "next/link";
import Image from "next/image";
import { testimonials, perks } from "@/static/home.data";
import { classNames } from "@/utility/css-helper";
import CustomerReviews from "@/components/customer-reviews/customer-reviews";
import TimeLineComponent from "@/components/timeline/time-line-component";
import { pages } from "@/static/layout.data";
import { useRouter } from "next/router";
// import ContactForm from "@/components/forms/contact-form";
const metrics = [
  {
    id: 1,
    stat: "5+",
    emphasis: "Published books",
    rest: " - As of now, we have published 5+ books.",
  },
  {
    id: 2,
    stat: "2+",
    emphasis: "Languages",
    rest: "We are publishing books in more than 2 languages",
  },
  {
    id: 3,
    stat: "100%",
    emphasis: "Customer Satisfaction",
    rest: "",
  },
  //
  //   id: 4,
  //   stat: "12M+",
  //   emphasis: "Issues resolved",
  //   rest: "lacus nibh integer quis.",
  // },
];

const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <MobileHeaderComponent
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden banner-video md:h-screen lg:h-screen"
        >
          <video
            autoPlay
            loop
            muted
            poster="https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg"
          >
            <source src="Book-Aesthetic mp4" type="video/mp4" />
          </video>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50 md:h-screen lg:h-screen"
        />

        {/* Navigation */}

        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}

            {/* Secondary navigation */}
            <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                          alt=""
                        />
                      </a>
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
                                            open
                                              ? "bg-gray-200"
                                              : "bg-transparent",
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
                              <a
                                className={` cursor-pointer ${
                                  router.pathname.includes(page.href)
                                    ? "border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium"
                                    : "flex items-center text-sm font-medium text-white hover:border-gray-300 hover:text-indigo-300"
                                }`}
                              >
                                {/* <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"> */}
                                {page.name}
                              </a>
                            </NextLink>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>
                    <div className="flex-1 flex items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 p-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                    </div>
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <img
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Bookation
          </h1>
          <p className="mt-4 text-xl text-white">
            India's first Book publishing workflow automation platform.
            <br />
            Checkout our latest publications.
          </p>

          <button>hh</button>
        </div>
      </div>

      <section className="border-y border-gray-300 relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-20 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
          Our List of Activity
        </h2>
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-8">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center border border-gray-100 rounded-2xl px-6 py-8 hover:shadow-2xl transition-all ease-in-out delay-150 hover:-translate-y-2 cursor-pointer bg-gray-200"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <Image
                      className="-my-1 h-24 w-auto mx-auto"
                      src={perk.imageUrl}
                      alt=""
                      width={125}
                      height={125}
                      layout="fixed"
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-gray-900">
          <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
                Our Presence
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Automates the book publishing process and provides writers to
                publish books
                <br />
                at zero cost!
              </p>
              {/* <p className="mt-5 text-lg text-gray-300">
                Automates the book publishing process and provides writers to
                publish books at zero cost!
              </p> */}
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {/* {item.rest} */}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TimeLineComponent />
      <CustomerReviews />

      {/* <ContactForm /> */}
    </div>
  );
}
