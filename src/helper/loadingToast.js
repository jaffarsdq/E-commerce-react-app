import { toast } from 'react-hot-toast';

export const showLoadingToast = (text) => {
  toast.loading(text, {
    duration: 0, // Set duration to 0 to make it a persistent toast until explicitly dismissed
  });
};

export const dismissLoadingToast = () => {
  toast.dismiss(); // Dismiss the loading toast
};
