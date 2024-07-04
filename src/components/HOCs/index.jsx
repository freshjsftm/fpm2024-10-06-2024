import { ThemeContext, UserContext } from '../../contexts';

export const withTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};

export const withUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {(user) => <InnerComponent user={user} {...props} />}
    </UserContext.Consumer>
  );
};
