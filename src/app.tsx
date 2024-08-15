import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./RootLayout";
import "./index.css";
import { lazy, ReactNode, Suspense } from "react";

const Root = lazy(() => import("./Root"));
const Foo = lazy(() => import("./Foo"));
const Bar = lazy(() => import("./Bar"));

export const SuspenseLazySkeletonLoader = ({
  children,
}: {
  children: ReactNode;
}) => <Suspense fallback={<div>loading ...</div>}>{children}</Suspense>;

let router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/react-router-react-lazy/",
        element: (
          <SuspenseLazySkeletonLoader>
            <Root />
          </SuspenseLazySkeletonLoader>
        ),
      },
      {
        path: "/react-router-react-lazy/foo",
        element: (
          <SuspenseLazySkeletonLoader>
            <Foo />
          </SuspenseLazySkeletonLoader>
        ),
      },
      {
        path: "/react-router-react-lazy/bar",
        element: (
          <SuspenseLazySkeletonLoader>
            <Bar />
          </SuspenseLazySkeletonLoader>
        ),
      },
      {
        path: "*",
        loader: () => redirect("/react-router-react-lazy/"),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
