import { toast } from 'react-hot-toast';

const Alertify = {
    success: (alert_text) => {
        toast.dismiss();
        toast.show({
            text: alert_text,
            showAction: false,
            backgroundColor: '#5cb85c',
            textColor: '#fff',
            customClass: 'text-base text-center',
        });
    },
    error: (alert_text) => {
        toast.dismiss();
        toast.show({
            text: alert_text,
            showAction: false,
            backgroundColor: '#ff0000',
            textColor: '#fff',
            customClass: 'text-base text-center',
        });
    },
    default: (alert_text, action_text, action_callback) => {
        toast.dismiss();
        toast.show({
            text: alert_text,
            showAction: !!action_text,
            backgroundColor: '#464646',
            textColor: '#fff',
            actionText: action_text,
            actionTextColor: '#fb8903',
            onActionClick: action_callback,

            customClass: `text-base ${!action_text ? 'text-center' : null}`,
            pos: 'bottom-center',
        });
    },
};

export default Alertify;
