import React from "react";
import Link from "next/link";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";
import axios from "axios";
import toast from "react-hot-toast";
import {
  AiOutlineDelete,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineSave,
  AiOutlineFileAdd,
  AiOutlineLink,
  AiOutlineEdit,
} from "react-icons/ai";
import { CgArrowsMergeAltH, CgArrowsShrinkH } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";
import { MdCenterFocusWeak } from "react-icons/md";
import { TiFlowMerge } from "react-icons/ti";
import { Tooltip } from "src/components/Tooltip";
import { ClearModal } from "src/containers/Modals/ClearModal";
import { DownloadModal } from "src/containers/Modals/DownloadModal";
import { ImportModal } from "src/containers/Modals/ImportModal";
import { ShareModal } from "src/containers/Modals/ShareModal";
import useConfig from "src/hooks/store/useConfig";
import { getNextLayout } from "src/utils/getNextLayout";
import styled from "styled-components";
import shallow from "zustand/shallow";

const StyledSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background: ${({ theme }) => theme.BACKGROUND_TERTIARY};
  padding: 4px;
  border-right: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const StyledElement = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  width: fit-content;
  color: ${({ theme }) => theme.SIDEBAR_ICONS};
  cursor: pointer;

  svg {
    padding: 12px 8px;
    vertical-align: middle;
  }

  a {
    display: flex;
  }

  &:hover :is(a, svg) {
    color: ${({ theme }) => theme.INTERACTIVE_HOVER};
  }

  @media only screen and (max-width: 768px) {
    font-size: 22px;

    svg {
      padding: 8px 4px;
      vertical-align: middle;
    }
  }
`;

const StyledText = styled.span<{ secondary?: boolean }>`
  color: ${({ theme, secondary }) =>
    secondary ? theme.INTERACTIVE_HOVER : theme.ORANGE};
`;

const StyledFlowIcon = styled(TiFlowMerge)<{ rotate: number }>`
  transform: rotate(${({ rotate }) => `${rotate}deg`});
`;

const StyledTopWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .mobile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-evenly;
    flex-direction: row;

    .mobile {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }
`;

const StyledBottomWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled.a`
  color: ${({ theme }) => theme.FULL_WHITE};
  padding: 8px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};

  @media only screen and (max-width: 768px) {
    border-bottom: 0;
  }
`;

function rotateLayout(layout: "LEFT" | "RIGHT" | "DOWN" | "UP") {
  if (layout === "LEFT") return 90;
  if (layout === "UP") return 180;
  if (layout === "RIGHT") return 270;
  return 360;
}

const createWorker = createWorkerFactory(() => import("./worker"));

export const Sidebar: React.FC = () => {
  const worker = useWorker(createWorker);
  const getJson = useConfig(state => state.getJson);
  const setConfig = useConfig(state => state.setConfig);
  const centerView = useConfig(state => state.centerView);
  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [clearVisible, setClearVisible] = React.useState(false);
  const [shareVisible, setShareVisible] = React.useState(false);
  const [isDownloadVisible, setDownloadVisible] = React.useState(false);
  const [shareId, setShareId] = React.useState("");

  const [expand, layout, hideEditor] = useConfig(
    state => [state.expand, state.layout, state.hideEditor],
    shallow
  );

  const handleSave = () => {
    const a = document.createElement("a");
    const file = new Blob([getJson()], { type: "text/plain" });

    a.href = window.URL.createObjectURL(file);
    a.download = "jsoncrack.json";
    a.click();
  };

  const handleShare = async () => {
    try {
      setShareId("");
      setShareVisible(true);

      const encoded = await worker.compressor(getJson());
      const url = await axios.post(
        "https://api.buildable.dev/@62190653596cdb0012a7f3b1/test/add-json",
        { json: encoded }
      );

      setShareId(url.data.id);
    } catch (error) {
      console.error(error);
      toast.error("An error occured while generating share link!");
    }
  };

  const toggleExpandCollapse = () => {
    setConfig("expand", !expand);
    toast(`${expand ? "Collapsed" : "Expanded"} nodes.`);
  };

  const toggleLayout = () => {
    const nextLayout = getNextLayout(layout);
    setConfig("layout", nextLayout);
  };

  return (
    <StyledSidebar>
      <StyledTopWrapper>
        <Link passHref href="/">
          <StyledElement as={StyledLogo}>
            <StyledText>J</StyledText>
            <StyledText secondary>C</StyledText>
          </StyledElement>
        </Link>
        <Tooltip className="mobile" title="Edit JSON">
          <StyledElement onClick={() => setConfig("hideEditor", !hideEditor)}>
            <AiOutlineEdit />
          </StyledElement>
        </Tooltip>
        <Tooltip title="Import File">
          <StyledElement onClick={() => setUploadVisible(true)}>
            <AiOutlineFileAdd />
          </StyledElement>
        </Tooltip>
        <Tooltip title="Rotate Layout">
          <StyledElement onClick={toggleLayout}>
            <StyledFlowIcon rotate={rotateLayout(layout)} />
          </StyledElement>
        </Tooltip>
        <Tooltip className="mobile" title="Center View">
          <StyledElement onClick={centerView}>
            <MdCenterFocusWeak />
          </StyledElement>
        </Tooltip>
        <Tooltip
          className="desktop"
          title={expand ? "Shrink Nodes" : "Expand Nodes"}
        >
          <StyledElement
            title="Toggle Expand/Collapse"
            onClick={toggleExpandCollapse}
          >
            {expand ? <CgArrowsMergeAltH /> : <CgArrowsShrinkH />}
          </StyledElement>
        </Tooltip>
        <Tooltip className="desktop" title="Save JSON">
          <StyledElement onClick={handleSave}>
            <AiOutlineSave />
          </StyledElement>
        </Tooltip>
        <Tooltip className="mobile" title="Download Image">
          <StyledElement onClick={() => setDownloadVisible(true)}>
            <FiDownload />
          </StyledElement>
        </Tooltip>
        <Tooltip title="Clear JSON">
          <StyledElement onClick={() => setClearVisible(true)}>
            <AiOutlineDelete />
          </StyledElement>
        </Tooltip>
        <Tooltip className="desktop" title="Share">
          <StyledElement onClick={handleShare}>
            <AiOutlineLink />
          </StyledElement>
        </Tooltip>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledElement>
          <Link href="https://twitter.com/aykutsarach">
            <a aria-label="Twitter" rel="me" target="_blank">
              <AiOutlineTwitter />
            </a>
          </Link>
        </StyledElement>
        <StyledElement>
          <Link href="https://github.com/AykutSarac/jsoncrack.com">
            <a aria-label="GitHub" rel="me" target="_blank">
              <AiFillGithub />
            </a>
          </Link>
        </StyledElement>
        <StyledElement>
          <Link href="https://github.com/sponsors/AykutSarac">
            <a aria-label="GitHub Sponsors" rel="me" target="_blank">
              <HiHeart />
            </a>
          </Link>
        </StyledElement>
      </StyledBottomWrapper>
      <ImportModal visible={uploadVisible} setVisible={setUploadVisible} />
      <ClearModal visible={clearVisible} setVisible={setClearVisible} />
      <ShareModal
        visible={shareVisible}
        setVisible={setShareVisible}
        shareId={shareId}
      />
      <DownloadModal visible={isDownloadVisible} setVisible={setDownloadVisible} />
    </StyledSidebar>
  );
};
