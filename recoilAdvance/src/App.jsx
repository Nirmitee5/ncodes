import { RecoilRoot, useRecoilValue } from "recoil"
import { atom } from "recoil";
import { notificationCount } from "./assets/atoms/counteratom";
function App(){
  return <RecoilRoot>
    <X/>
   </RecoilRoot>
}
function X() {
  const post = useRecoilValue(notificationCount);
  return <div>
    {post.userId}
    {post.title}
  </div>
}
export default App;