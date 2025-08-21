import axios from "axios";
import { atom, selector } from "recoil";

//asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000))//sleeps fpr 5 sec
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }

    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})