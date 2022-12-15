import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect( () => {
    setTimeout(() => {
      navigate("/", {replace: true})
    }, 3000);
  }, [navigate]);

  return (
    <>
    <p>We will redirect you to main page in 3 sec</p>
    </>
  )
};

export default NotFoundPage;