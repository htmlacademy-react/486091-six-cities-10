function PageNotFoundScreen(): JSX.Element {
  return (
    <div style={{
      background:
        'url("https://www.plerdy.com/wp-content/uploads/2018/06/44.png")',
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh',
      color: 'red',
      textDecoration: 'underline',
      margin: '-16px 0px auto'
    }}
    >
      <p>404 Not Found</p>
      <a href="">Home page</a>
    </div>

  );
}

export default PageNotFoundScreen;
