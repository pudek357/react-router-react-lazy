import { Link, Outlet, useLocation } from "react-router-dom";

export const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <div className="topbar">current pathname: "{pathname}"</div>

      <div className="main-content">
        <div className="sidebar">
          <div>
            <Link to="/react-router-react-lazy/">root</Link>
          </div>
          <div>
            <Link to="/react-router-react-lazy/foo">foo</Link>
          </div>
          <div>
            <Link to="/react-router-react-lazy/bar">bar</Link>
          </div>
        </div>

        <div className="content">
          <div className="card">
            <h2>Content</h2>

            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
