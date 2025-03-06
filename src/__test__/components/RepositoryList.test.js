import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react-native";
import RepositoryList from "../../components/RepositoryList";
import { GET_RESPOSITORIES } from "../../graphql/queries";

const repositories = {
  edges: [
    {
      node: {
        id: "jaredpalmer.formik",
        fullName: "jaredpalmer/formik",
        description: "Build forms in React, without the tears",
        language: "TypeScript",
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
      },
    },
    {
      node: {
        id: "async-library.react-async",
        fullName: "async-library/react-async",
        description: "Flexible promise-based React data loader",
        language: "JavaScript",
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
      },
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_RESPOSITORIES,
    },
    result: {
      data: {
        repositories,
      },
    },
  },
];

describe("RepositoryList", () => {
  it("renders repository information correctly", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RepositoryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("jaredpalmer/formik")).toBeTruthy();
      expect(screen.getByText("async-library/react-async")).toBeTruthy();
    });
  });
});
