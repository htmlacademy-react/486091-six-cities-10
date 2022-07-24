import Header from '../header/header';

type Props = {
  children: JSX.Element,
  pageAttributes: {
    'Title'?: string,
    'MainClassName': string,
    'BodyClassName': string,
  }
}

function Layout({children, pageAttributes}: Props) {
  return (
    <div className={pageAttributes.BodyClassName}>
      <Header />
      <main className={pageAttributes.MainClassName}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
