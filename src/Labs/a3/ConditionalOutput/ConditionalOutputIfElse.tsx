const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if (loggedIn) {
    // if true
    return <h2>Welcome If Else</h2>;
  } else {
    // if false 
    return <h2>Please login If Else</h2>;
  }
};
export default ConditionalOutputIfElse;
