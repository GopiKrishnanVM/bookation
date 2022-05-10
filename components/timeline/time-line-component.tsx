type Props = {};

const TimelineIndexComponent: React.FC<Props> = ({}) => {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-20 lg:px-8">
      <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
        Mission to unlock
      </h2>
      <p className="text-xl  text-center tracking-tight text-gray-900 pb-10">
        We are on a mission to digitize the book publishing process and help
        budding writers to enjoy an end-to-end SAAS platform to publish their
        book at a zero cost and get paid.
      </p>
      <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
        Milestones so for
      </h2>
      <div className="timeline">
        <div className="timelinebox left">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">Mar 2022</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Idea pitch & Brainstorming
            </p>
          </div>
        </div>
        <div className="timelinebox right">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">Apr 2022 </h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Working on the initial product <br></br>launch plan and execution
            </p>
          </div>
        </div>
        <div className="timelinebox left">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">May 2022</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Launched our first version of our #Bookation
            </p>
          </div>
        </div>
        {/* <div className="timelinebox right">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">April 2022</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum
            </p>
          </div>
        </div>
        <div className="timelinebox left">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">May 2022</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TimelineIndexComponent;
