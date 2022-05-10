import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { pages } from "@/static/layout.data";
import { useRouter } from "next/router";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const MobileHeaderComponent: React.FC<Props> = ({ open, setOpen }) => {
  const { pathname, push } = useRouter();

  const handleLinkClick = (link: string): void => {
    if (link != pathname) {
      push(link);
    }
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              {pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <span onClick={() => handleLinkClick(page.href)}>
                    <a className="-m-2 p-2 block font-medium text-gray-900 cursor-pointer">
                      {page.name}
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileHeaderComponent;
