import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLinks = props => {
  const router = useRouter();
  console.log(props.linksArray);

  return (
    <ul>
      {/* {props.linksArray.map(link => (
        <li key={link.id} className={router.pathname == link.to ? 'active' : ''}>
          <Link href={link.to}>{link.title}</Link>
        </li>
      ))} */}
    </ul>
  );
};
