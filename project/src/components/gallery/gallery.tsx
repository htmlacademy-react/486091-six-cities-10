type Props = {
  images: string[]
};

function Gallery({images}: Props): JSX.Element{
  return (
    <div className="property__gallery">
      {images.map((image, index): JSX.Element => {
        const k = index;
        if (index < 6) {
          return (
            <div className="property__image-wrapper" key={k}>
              <img className="property__image" src={image} alt="Photo studio"/>
            </div>
          );
        } else {
          return (<> </>);
        }
      })}
    </div>
  );
}

export default Gallery;
