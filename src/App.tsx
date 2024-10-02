import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { CommonLayout } from '@/layouts/CommonLayout';
import { PodcastEpisodeInformation } from '@/components/PodcastEpisodeInformation';
import { PodcastInformation } from '@/components/PodcastInformation';
import { PodcasList } from '@/components/PodcastList';
import { PodcastLayout } from '@/layouts/PodcastLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <PodcasList />,
      },
      {
        path: "podcast/:id",
        element: <PodcastLayout />,
        children: [
          {
            index: true,
            element: <PodcastInformation />,
          },
          {
            path: "episode/:episodeId",
            element: <PodcastEpisodeInformation />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (

        <RouterProvider router={router} />
  
  );
}

export default App;
