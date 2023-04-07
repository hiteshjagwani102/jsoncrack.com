import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import Panes from "src/containers/Editor/Panes";
import useJson from "src/store/useJson";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh);
  width: 100%;

  @media only screen and (max-width: 768px) {
    position: fixed;
    height: -webkit-fill-available;
    flex-direction: column;
  }
`;

export const StyledEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const EditorPage: React.FC = () => {
  const { isReady, query } = useRouter();
  const fetchJson = useJson(state => state.fetchJson);

  React.useEffect(() => {
    // Fetch JSON by query
    // Check Session User
    if (isReady) {
      fetchJson(query.json);
    }
  }, [fetchJson, isReady, query.json]);

  return (
    <StyledEditorWrapper>
      <Head>
        <title>Editor | JSON Crack</title>
        <meta name="description" content="View your JSON data in graphs instantly." />
      </Head>
      <StyledPageWrapper>
        <StyledEditorWrapper>
          <Panes />
        </StyledEditorWrapper>
      </StyledPageWrapper>
    </StyledEditorWrapper>
  );
};

export default EditorPage;
