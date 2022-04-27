/* This example requires Tailwind CSS v2.0+ */
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { people, salesTeam } from "@/static/about.data";
import {
  CheckCircleIcon,
  MailIcon,
  ChevronDownIcon,
  PlayIcon,
} from "@heroicons/react/solid";

const mailToAction = [
  {
    name: "Email Us",
    href: "https://mail.google.com/mail/u/0/?source=mailto&to=bookation.official@gmail.com&fs=1&tf=cm",
    icon: MailIcon,
  },
];
const callsToAction = [{ name: "Contact Us ", href: "/#", icon: PhoneIcon }];

const supportLinks = [
  {
    name: "Sales Support",
    href: "#",
    description: "For any sales related queries and support.",
    icon: PhoneIcon,
    teamMembers: [
      {
        name: "Praveen Kumar",
        role: "Co-Founder / CTO",
        contactNumber: "+91 9698770609",
        contactEmail: "bookation.offical@gmail.com",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      },
    ],
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Facing any technical issues?. Don't worry just give us a call.. we'll try to get that fixed asap.",
    icon: SupportIcon,
    teamMembers: [
      {
        name: "Kaarmuhilan KP",
        role: "Co-Founder / CTO",
        contactNumber: "+91 6383172402",
        contactEmail: "bookation.offical@gmail.com",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      },
    ],
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/we-love-you.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            24x7 Support
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Facing any issues? Don't worry - We'll provide 24x7 support to
            resolve your issue.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div>
                <ul
                  role="list"
                  className="flex flex-wrap justify-center gap-x-8"
                >
                  {link.teamMembers.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-4 flex justify-center">
                        <div className="space-y-2">
                          <div className="text-xs font-medium lg:text-sm">
                            <h3>{person.name}</h3>
                            <p className="text-indigo-600">{person.role}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-gray-50 flex justify-center">
                  <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={`tel:${9873737373}`}
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                  <div />
                  <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                    {mailToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          target="_blank"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
