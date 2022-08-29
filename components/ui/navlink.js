import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLinks = props => {
  const router = useRouter();
  console.log(props.linksArray);

  return (
    <ul className='flex h-full items-center'>
      {props.linksArray.map(link => (
        <li
          key={link.id}
          className={`${router.pathname == link.to ? 'active' : ''} h-full flex items-center px-4 text-offwhite border uppercase`}
        >
          <Link href={`${link.to}`}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
