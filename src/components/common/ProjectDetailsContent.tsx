import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { StrapiLanguageTechType } from '../../../types/project.types';
import ReactMarkdown from 'react-markdown';
import { getImageUrl } from 'utils/getImageUrl';
export const transformImageUriHandler = (uri: string) => {
  if (uri.startsWith('/uploads/')) {
    return `${process.env.NEXT_PUBLIC_API_IMAGE}${uri}?format=webp`;
  }
  return uri;
};
// =======================================================
type ProjectDetailsContentProps = {
  title: string;
   description?: string;
   technologies?: StrapiLanguageTechType[]
  titleClass?: string;
  contentRowClass?: string;
  showIconList?: boolean;
};
// =======================================================

const ProjectDetailsContent: FC<ProjectDetailsContentProps> = ({
  title,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4',
  description,
  technologies,
  showIconList=false,

}) => {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9">
            {description && <ReactMarkdown
                   urlTransform={transformImageUriHandler}
                  components={{
                    // Map `h1` (`# heading`) to use `h2`s.
                    h2: ({ ...props }) => <h2 className="h1 mb-3  " {...props} />,
                    h3: ({ ...props }) => <h3 className="h3 mb-3  " {...props}></h3>,
                    h4: ({ ...props }) => <h4 className="h4 mb-3  " {...props}></h4>,
                    h5: ({ ...props }) => <h5 className="h5 mb-3  " {...props}></h5>,
                    h6: ({ ...props }) => <h6 className="h6 mb-3  " {...props}></h6>,
                    p: ({ ...props }) => <p  {...props}></p>,
                    ul: ({ ...props }) =>
                      showIconList ? (
                        <ul className="icon-list bullet-bg bullet-soft-orange ps-3 " {...props}></ul>
                      ) : (
                        <ul className="unordered-list bullet-orange ps-3 " {...props}></ul>
                      ),
                    li: ({ ...props }) =>
                      showIconList ? (
                        <li>
                          <i className={`uil uil-check  fs-20 text-orange `} />
                          <span> {props.children}</span>
                        </li>
                      ) : (
                        <li>{props.children}</li>
                      ),
                    // // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                    // em: ({ ...props }) => <i style={{ color: 'red' }} {...props} />,
                    // Custom renderer for images to be responsive
                    img: ({ alt, src, title, ...props }) => (
                      <img
                        alt={alt}
                        src={src}
                        title={title}
                        style={{ maxWidth: '100%', height: 'auto' }}
                        className="rounded my-5"
                        {...props}
                      />
                    )
                  }}
                >
                  {description as string}
                </ReactMarkdown>}
          </div>

          <div className="col-md-2 ms-auto">
          {technologies !== undefined && technologies.length > 0 && (
              <div className="widget mb-5">
                <h2 className="widget-title mb-3">Technologies</h2>

                <div className={`row `}>
                  {technologies.map(({ attributes, id }) => (
                    <li
                      className={` col-6 col-md-6 d-flex gap-2 align-items-center justify-content-center mb-2 flex-column p-2 `}
                      key={id}
                    >
                      <img
                        style={{ width: '2rem' }}
                        className="h-auto"
                        src={getImageUrl(`${attributes.technologyLogo.data?.attributes?.url}`) || ''}
                        alt=""
                      />
                      <span className="custom-truncate-text" title={attributes.technologyName}>
                        {' '}
                        {attributes.technologyName}
                      </span>
                    </li>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
