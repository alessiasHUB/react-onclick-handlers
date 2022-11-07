interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1 onClick = { () => window.alert(title.toUpperCase())}>{title}</h1>;
}

export default AppHeader;
