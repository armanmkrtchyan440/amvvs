const toaster = () => {
  return import("react-toastify").then(({ toast }) => toast);
};
