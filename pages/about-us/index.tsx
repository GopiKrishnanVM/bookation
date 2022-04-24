
import { people } from "@/static/about.data";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h1>
            <h2 className="text-base font-bold tracking-tight sm:text-base">
              3 Men's of Bookation
            </h2>
            <div className="text-xl font-bold tracking-tight sm:text-2xl">
              Men who made it happen!
            </div>
          </div>
          <div>
            <ul role="list" className="flex flex-wrap justify-center gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src={person.imageUrl}
                      alt=""
                    />
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
          <p className="text-xl text-gray-500">
            We are providing an end-to-end SAAS platform to publish their book
            at a zero cost and get paid.
          </p>
        </div>
      </div>
    </div>
  );
}
