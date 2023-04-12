/* eslint-disable react/jsx-pascal-case */
import { createBrowserRouter } from "react-router-dom";
import Ex1_3Page from "../Pages/Exercises/Ex1.3/Ex1.3";
import Ex2_2Page from "../Pages/Exercises/Ex2.2/Ex2.2";
import App from "../Pages/Home/App";
import Ex2_3Page from "../Pages/Exercises/Ex2.3/Ex2.3";
import Ex3_3Page from "../Pages/Exercises/Ex3.3/Ex3.3";
import Ex4_3Page from "../Pages/Exercises/Ex4.3/Ex4.3";
import Ex5_2Page from "../Pages/Exercises/Ex5.2/Ex5.2";
import Ex5_3Page from "../Pages/Exercises/Ex5.3/Ex5.3";
import Layout from "../components/Layout/LayoutExercises";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ex1.3",
    element: (
      <Layout
        title="Welcome to exercise 1.3"
        subtitle="Build an interface with React and Material UI where the user can
        navigate to another page by clicking a button."
      >
        <Ex1_3Page />
      </Layout>
    ),
  },
  {
    path: "ex2.2",
    element: (
      <Layout
        title="Welcome to exercise 2.2"
        subtitle="Implement an interface where use can set a combination of a lock. Design
        the interface to be easy to use. Utilise Material-UI components."
      >
        <Ex2_2Page />
      </Layout>
    ),
  },
  {
    path: "ex2.3",
    element: (
      <Layout
        title="Welcome to exercise 2.3"
        subtitle="  Build an interface where a user can type his/her pets name and indicate,
        what kind of an animal it is. Then the user click a button. The interface will then display a nice message to the pet. Submit the React code."
      >
        <Ex2_3Page />
      </Layout>
    ),
  },
  {
    path: "ex3.3",
    element: (
      <Layout
        title="Welcome to exercise 3.3"
        subtitle="Create an app where you utilize a canvas element. Draw something on canvas by utilizing transforms, e.g., draw the same things twice so that the end result will be two different size, location and/or orientation of the shape drawn. Submit the React application source code."
      >
        <Ex3_3Page />
      </Layout>
    ),
  },
  {
    path: "ex4.3",
    element: (
      <Layout
        title="Welcome to exercise 4.3"
        subtitle="Pick a set of pictures (at least 4) from your favorite source. Build an application using React with the pictures included. Show one image at a time (image carousel) and allow the user to browse the pictures using keyboard."
      >
        <Ex4_3Page />
      </Layout>
    ),
  },
  {
    path: "ex5.2",
    element: (
      <Layout
        title="Welcome to exercise 5.2"
        subtitle="Create an app where you get a ref to a DOM node. Modify it using the reference to change the text or colour."
      >
        <Ex5_2Page />
      </Layout>
    ),
  },
    {
      path: "ex5.3",
      element: (
        <Layout
          title="Welcome to exercise 5.3"
          subtitle="Create React app using MUI components that has 2 main elements.Shown some image. Put an Ui element where you can select other images to be shown instead of default one. But dont use just buttons etc. just to cycle between images, like carousel in previous week exercise. Other image options shouldnt be visible all the time. You can select how to implement this, but good options to try out might be menu, drawer etc. Look around in MUI navigation elements."
        >
          <Ex5_3Page />
        </Layout>
      )
    },
]);
