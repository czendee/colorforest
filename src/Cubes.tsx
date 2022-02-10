import { useMemo } from "react";
import { Color } from "three";
import { Floating } from "spacesvr";

const COUNT = 150;
const RANGE_XZ = 50;
const RANGE_Y = 30;

type Cube = {
  position: [number, number, number];
  size: number;
  color: Color;
  speed: number;
};

const Cubes = (props) => {
  const cubes: Cube[] = useMemo(() => {
    const arr: Cube[] = [];
    for (let i = 0; i < COUNT; i++) {
      arr.push({
        position: [
          Math.random() * RANGE_XZ * 2 - RANGE_XZ,
          Math.random() * RANGE_Y,
          Math.random() * RANGE_XZ * 2 - RANGE_XZ
        ],
        size: 0.5 + Math.random() * 2.5,
        color: new Color().setHSL(Math.random(), Math.random(), Math.random()),
        speed: Math.random() + 0.2
      });
    }
    return arr;
  }, []);

  return (
    <group>
      {cubes.map((cube) => (
        // @ts-ignore
        <Floating height={cube.size * 1.5} speed={cube.speed}>
          <mesh position={cube.position}>
            <boxBufferGeometry args={[cube.size, cube.size * 20, cube.size]} />
            <meshStandardMaterial color={cube.color} />
          </mesh>
        </Floating>
      ))}
    </group>
  );
};

export default Cubes;
