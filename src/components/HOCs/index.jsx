import { ThemeContext, UserContext } from "../../contexts";

export const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} 
        setTheme={setTheme} {...props}/>
      )}
    </ThemeContext.Consumer>
  );
};

export const WithUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <InnerComponent user={user} {...props}/>
      )}
    </UserContext.Consumer>
  );
};
