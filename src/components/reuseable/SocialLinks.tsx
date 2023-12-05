import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/visionvertex_?t=OXDFVA6cIaTv4PgSRSEf0g&s=09' },
  { id: 2, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/profile.php?id=61550796133982&mibextid=ZbWKwL' },
  { id: 3, icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/posts/visionvertex-it-solutions_techsolutions-webdevelopment-softwareinnovation-activity-7137499118179876865-Z63N?utm_source=share&utm_medium=member_desktop' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://instagram.com/visionvertex_it_services?igshid=YTQwZjQ0NmI0OA==' },
 { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
