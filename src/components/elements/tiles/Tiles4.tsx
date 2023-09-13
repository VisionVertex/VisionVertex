import { FC } from 'react';

const images = [
  {
    id: 1,
    className: 'col-md-4 offset-md-2 align-self-end',
    image: { '1x': '/img/web-image.png' }
  },
  {
    id: 2,
    className: 'col-md-6 align-self-end',
    image: { '1x': '/img/mobile.png' }
  },
  {
    id: 3,
    className: 'col-md-6 offset-md-1',
    image: { '1x': '/img/database.png' }
  },
  {
    id: 4,
    className: 'col-md-4 align-self-start',
    image: { '1x': '/img/coding.png'  }
  }
];

const Tiles4: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      {images.map(({ id, className, image }) => (
        <div className={className} key={id}>
          <figure className="rounded">
            <img src={image['1x']}  alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Tiles4;
