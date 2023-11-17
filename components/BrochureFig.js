export default function BrochureFig({ fileName, figureNumber }) {
  return (
    <div>
      <div className="child-1">
        <div className="mr-4">
          <img
            src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}`}
            className=""
            alt={`missing PDF document: ${fileName}`}
            style={{
              width: "100%",
              border: "5px solid black",
              boxShadow: "15px 15px 0px rgba(0, 0, 0, 1)",
            }}
          />
        </div>
        <div className="child-2">
          <div className="-translate-y-44 translate-x-12 absolute z-20">
            <div className="text-red-800 text-8xl young-serif-font text-opacity-90 italic relative">
              {figureNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}