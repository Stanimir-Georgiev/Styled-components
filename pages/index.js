import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { GraphQLClient, gql } from "graphql-request";

async function main(username, password) {
  const endpoint = "https://dxdemos.eu/wpgraphql/?graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  });

  const mutation = gql`
    mutation LoginUserMutation($input: LoginInput!) {
      login(input: $input) {
        authToken
        user {
          id
          name
        }
      }
    }
  `;

  const variables = {
    input: {
      clientMutationId: "",
      username,
      password,
    },
  };
  const data = await graphQLClient.request(mutation, variables);

  console.log(JSON.stringify(data, undefined, 2));
}

const StyledBox1 = dynamic(() => import("../components/styledBox1"));

const StyledBox2 = dynamic(() => import("../components/styledBox2"));

const SideBar = dynamic(() => import("../components/Sidebar"));

const Content = dynamic(() => import("../components/Content"));

export default function Home() {
  const [loadSecond, setLoadSecond] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    main(username, password).catch((error) => console.error(error));
  };

  const handleScroll = (e) => {
    console.log("scrolled");
    setLoadSecond(true);
  };

  console.log(loadSecond);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
