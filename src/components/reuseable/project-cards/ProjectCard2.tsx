import { CSSProperties, FC } from 'react';
import NextLink from '../links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';
// ==============================================================================
type ProjectCard2Props = {
  link: string;
  title: string;
  color?: string;
  category: string;
  description: string;
  imageClassName: string;
  cardStyle?: CSSProperties;
  detailsStyle?: CSSProperties;
  image_url: string;
  width:number;
  height:number;
};
// ==============================================================================

const ProjectCard2: FC<ProjectCard2Props> = (props) => {
  const { link, title, category, description, image_url, imageClassName, cardStyle, detailsStyle, color,width,height } = props;

  const catColor = color ? `text-${color}` : 'text-purple';
  const linkColor = color ? `link-${color}` : 'link-purple';

  return (
    <div className="project item" >
      <div className="row" >

        <FigureImage width={width} height={height} src={image_url} className={imageClassName} />


        <div className="project-details d-flex justify-content-center flex-column" style={detailsStyle}>
          <div className="card shadow rellax "
           data-rellax-xs-speed="0" 
           data-rellax-mobile-speed="0" 
          style={{...cardStyle}}>
            <div className="card-body">
              <div className="post-header">
             { category &&   <div className={`post-category text-line ${catColor} mb-3`}>{category}</div>}
                <h3 className="d-block3 text-wrap h3 mb-3">{title}</h3>
              </div>

              <div className="post-content">
                <p className='text-truncate1'>{description}</p>
                <NextLink title="See Project" href={link} className={`more hover ${linkColor}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
