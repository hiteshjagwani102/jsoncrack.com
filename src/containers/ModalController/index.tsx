import React from "react";
import { shallow } from "zustand/shallow";

import { DownloadModal } from "src/containers/Modals/DownloadModal";

import useModal from "src/store/useModal";


export const ModalController = () => {
  const setVisible = useModal(state => state.setVisible);

  const [
    downloadModal,
  ] = useModal(
    state => [
      state.download,
 ],
    shallow
  );

  return (
    <>

      <DownloadModal opened={downloadModal} onClose={() => setVisible("download")(false)} />

    </>
  );
};
