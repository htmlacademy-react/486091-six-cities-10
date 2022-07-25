type Props = {
  list: string[],
  className?: string,
  listClassName?: string
}

function List(props: Props): JSX.Element {
  const list = props.list;
  const listItems = list.map((item) => <li className={props.className ? props.className : ''} key={item}>{item}</li> );
  return (
    <ul className={props.listClassName ? props.listClassName : ''}>{listItems}</ul>
  );
}

export default List;
