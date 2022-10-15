import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

const isAuth = () => {
  if (token) {
    return true;
  } else {
    return false;
  }
};

// logout
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.replace("/");
};

export const AuthService = {
  isAuth,
  logout,
};
