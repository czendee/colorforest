import { useMemo } from "react";
import { Color } from "three";
import { Floating, Text } from "spacesvr";

const COUNT = 150;
const RANGE_XZ = 50;
const RANGE_Y = 30;

type Cubo = {
  position: [number, number, number];
  size: number;
  color: Color;
  speed: number;
  texto: string;
};

const Cubos = () => {
  const cubos: Cubo[] = useMemo(() => {
    const arr: Cubo[] = [];
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
      {cubos.map((cubo) => (
        // @ts-ignore
        <Floating height={cubo.size * 1.5} speed={cubo.speed}>
          <mesh position={cubo.position}>
            <Text
              text="Yo soy tuyo"
              vAlign="center" // vertical align relative to the y component
              hAlign="center" // horizontal align relative to the x component
              size={1} // scale
              color="#000000" // color
            ></Text>
            <boxBufferGeometry args={[cubo.size, cubo.size * 20, cubo.size]} />
            <meshStandardMaterial color={cubo.color} />
          </mesh>
          <Text
            text="Aqui esta los que buscas"
            vAlign="center" // vertical align relative to the y component
            hAlign="center" // horizontal align relative to the x component
            size={1} // scale
            color="#000000" // color
          ></Text>
        </Floating>
      ))}
      <Text
        text="Es el inicio buscar"
        vAlign="center" // vertical align relative to the y component
        hAlign="center" // horizontal align relative to the x component
        size={1} // scale
        color="#000000" // color
      ></Text>
    </group>
  );
};

export default Cubos;
