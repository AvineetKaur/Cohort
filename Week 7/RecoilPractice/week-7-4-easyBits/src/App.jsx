import { RecoilRoot, useRecoilValue, } from "recoil"
import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from "./store/atoms/atoms"

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )

}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const messagingkNotificationCount = useRecoilValue(messagingAtom)
  const notificationsNotificationCount = useRecoilValue(notificationsAtom)

  const totalNotifactionCount = useRecoilValue(totalNotificationSelector);



  return (
    <>
      <button>Home</button>

      <button>My Network ({(networkNotificationCount >= 100 ? "99+" : networkNotificationCount)})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagingkNotificationCount})</button>
      <button>Notifications ({notificationsNotificationCount})</button>

      <button>Me({totalNotifactionCount})</button>
    </>
  )
}

export default App
