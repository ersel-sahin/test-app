import React from "react";

import 'App.css';

function SelfAccordion() {
  const [isActive, setActive] = React.useState(false);

  return (
    <div className="w-50 p-md border border-color-gray-alpha-1 bg-color-black-alpha-1">
      <a
        href="javascript:;"
        onClick={(e) => {
          e.preventDefault();
          setActive(!isActive)
        }}
        className="stack-x-j w-100 cursor-pointer"
      >
        <div className="text-lg ">
          Lorem ipsum dolor
        </div>
        <i className="iconoir-arrow-right"></i>
      </a>
      {isActive && (
        <div className="p-y-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus architecto amet sint veniam earum, dolorem quo voluptas rem.
          </p>
        </div>
      )}
    </div>
  )
}

function ChildAccordion({
  index,
  title,
  content,
  getActive,
  setActive,
}) {
  const isActive = (getActive === index);

  return (
    <div className="w-50 p-md border border-color-white border-color-primary@hover bg-color-gray-alpha-1 radius-sm">
      <a
        href="javascript:;"
        onClick={(e) => {
          e.preventDefault();
          setActive(index)
        }}
        className="stack-x-j w-100 cursor-pointer"
      >
        <div className="text-lg">
          {title}
        </div>
        <i className="iconoir-arrow-right"></i>
      </a>
      {isActive && (
        <div className="p-y-lg">
          <p>
            {content}
          </p>
        </div>
      )}
    </div>
  )
}

function Accordions() {
  const [getActive, setActive] = React.useState(0);

  const items = [
    {
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus architecto amet sint veniam earum, dolorem quo voluptas rem.',
    },
    {
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus architecto amet sint veniam earum, dolorem quo voluptas rem.',
    },
    {
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus architecto amet sint veniam earum, dolorem quo voluptas rem.',
    },
  ]

  return (
    <>
      <section className="m-y-5xl">
        <div className="wrap">
          <h2>
            Child Accordion
          </h2>
          <div className="stack-y-c m-bw-y-md">
            {items.map((item, index) => (
              <ChildAccordion
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                getActive={getActive}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="m-y-5xl">
        <div className="wrap">
          <h2>
            Self Accordion
          </h2>
          <div className="stack-y-c m-bw-y-md">
            {items.map((item, index) => (
              <SelfAccordion
                key={index}
                index={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordions;