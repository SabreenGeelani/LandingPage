import { RiDeleteBin6Line } from "react-icons/ri";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
export default function Screenshots({ data }) {
  const [showAll, setShowAll] = useState(false);
  // const [isScaled, setIsScaled] = useState(false);
  const snaps = showAll ? data : data?.slice(0, 8);

  // const handleClick = () => {
  //   setIsScaled(true);
  //   setTimeout(() => setIsScaled(false), 300);
  //   setShowAll(false);
  // };

  return (
    <div className="mb-4">
      <div className="px-sm-5 px-3 py-2 bg-graySecondary d-flex align-items-center justify-content-between">
        <div className="bg-white px-3 py-1 rounded-1 shadow fw-bolder">
          <span className="d-none d-sm-inline">Screenshots Selected</span> 0
        </div>
        <div className="d-flex gap-3 align-items-center">
          <button className="px-3 py-1 border-0 rounded-1 fw-bolder">
            Select all
          </button>
          <RiDeleteBin6Line className="fs-3" />
        </div>
      </div>
      {snaps?.length > 0 ? (
        <div className="d-flex gap-4 flex-wrap p-5">
          {snaps?.map((item) => {
            return (
              <div key={item.id} className="position-relative">
                <input
                  type="checkbox"
                  className="position-absolute top-0 end-0   translate-middle-x bg-white z-2"
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                    cursor: "pointer",
                  }}
                />
                <img
                  // key={item.id}
                  src={item.screenshot_url}
                  alt=""
                  style={{
                    width: "15rem",
                    height: "15rem",
                    objectFit: "cover",
                  }}
                />
                ;
              </div>
            );
          })}
        </div>
      ) : (
        <div className="px-4 py-2 d-flex align-items-center justify-content-center h-75">
          <div>
            <h5 className="text-center fw-light text-secondary">
              No, data found!
            </h5>
          </div>
        </div>
      )}
      {data?.length > 8 && (
        <div className="d-flex justify-content-end px-5 ">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className=" d-flex align-items-center gap-1 bg-transparent px-1 rounded border p-1 scale-up-hover"
              // className={`btn btn-primary ${isScaled ? "scale-animation" : ""}`}
              // onClick={handleClick}
            >
              View less <GoChevronUp />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className=" d-flex align-items-center gap-1 bg-transparent px-1 rounded border p-1 scale-up-hover "
            >
              View all <GoChevronDown />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
