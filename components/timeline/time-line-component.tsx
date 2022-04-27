type Props = {};

const TimelineIndexComponent: React.FC<Props> = ({}) => {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-20 lg:px-8">
      <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
        Mission to unlock
      </h2>
      <p className="text-xl  text-center tracking-tight text-gray-900 pb-10">
        We are on a mission to organize and digitize this huge unorganized and
        manual salon & spa industry. Help our partners enjoy an end-to-end SAAS
        platform to create long lasting, loyal clients & display 5X performance!
      </p>
      <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
        Milestones so for
      </h2>
      <div className="timeline">
        <div className="timelinebox left">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">
              January 2020
            </h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum
            </p>
          </div>
        </div>
        <div className="timelinebox right">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">May 2021</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum
            </p>
          </div>
        </div>
        <div className="timelinebox left">
          <div className="content">
            <h2 className="text-xl font-semibold text-gray-800">March 2022</h2>
            <p className="font-normal text-sm break-all text-gray-600">
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum
            </p>
          </div>
        </div>
        <div className="timelinebox right">
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
        </div>
      </div>
    </section>
  );
};

export default TimelineIndexComponent;
