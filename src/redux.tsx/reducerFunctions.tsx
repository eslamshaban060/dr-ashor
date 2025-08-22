//  reducer function to open and close the side bar

const SidebarToogle = {
  close: true,
};

export const OpenAndCloseFunction = (
  state = SidebarToogle,
  action: { type: string }
) => {
  switch (action.type) {
    case "OPEN_CLOSE_TOOGLE":
      return { close: !state.close };

    default:
      return state;
  }
};
