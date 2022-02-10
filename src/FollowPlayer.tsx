import { useRef, ReactNode } from "react";
import { Group } from "three";
import { useFrame } from "react-three-fiber";

const FollowPlayer = (props: { children: ReactNode }) => {
  const { children } = props;
  const group = useRef<Group>();

  /*  useFrame(({ camera }) => {
    if (group.current) {
      group.current.position.x = camera.position.x;
      group.current.position.z = camera.position.z;
    }
  });
*/
  return <group ref={group}>{children}</group>;
};

export default FollowPlayer;
