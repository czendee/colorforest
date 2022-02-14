import "./styles.css";
import { StandardEnvironment, Background, Fog, Image } from "spacesvr";
import Cubes from "./Cubos2";
import * as THREE from "three";
import FollowPlayer from "./FollowPlayer";
import GroovyLight from "./GroovyLight";
import { useState, useEffect } from "react";

//to get data from api
import axios from "axios";
//import { useState, useMemo } from "react";

/* IMPORTANT: Codesandbox does not allow */
/* PointerLockAPI to be used. Please use */
/* a separate tab https://e9w29.csb.app/ */
/* or use the KeyframeEnvironment */
export default function App() {
  type Libro = {
    indice: number;
    titulo: string;
  };

  //  const [books, setBooks] = useState(null);

  //    const [books, setBooks] = useMemo(null);

  const arribotota: Libro[] = [
    { indice: 1, titulo: "The Princess and the Queen" },
    { indice: 1, titulo: "The Rogue Prince" },
    { indice: 1, titulo: "The World of Ice and Fire" }
  ];

  const [stocks, setStocks] = useState([]);
  console.log("stocks", stocks);

  const arr: Libro[] = [];

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        "https://www.anapioficeandfire.com/api/books?pageSize=30"
      );
      console.log("datos encontardo API:");
      console.log(resp.data);
      // After collecting all the data we can set data into state at once.
      setStocks(resp.data);
      //iterate the results
      resp.data.forEach((element: any) => {
        console.log("dato traido");
        console.log(element);
        arr.push({ indice: 1, titulo: element.name });
      });
      let arrayLength = arr.length;
      console.log("how many arr elements:");
      console.log(arrayLength);

      arr.forEach(function (item, index) {
        console.log("loopeando");
        console.log(item, index);
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  //fetchData(); //call the fetch method
  useEffect(() => {
    fetchData();
  }, []);

  const otro: Libro = { indice: 2, titulo: "este sea romantico" };
  const COUNT = 150;

  const arrLibros: Libro[] = [];
  for (let i = 0; i < COUNT; i++) {
    arrLibros.push({
      indice: 5,
      //      titulo: "este es el amorrrs"
      titulo: arribotota[1].titulo
    });
  }

  return (
    <StandardEnvironment>
      <Background color="white" />
      <Fog color={new THREE.Color("white")} near={0} far={20} />
      <Cubes parametrito={otro} libros={arrLibros} stocks={stocks} />
      <ambientLight />

      <FollowPlayer>
        <GroovyLight />
      </FollowPlayer>
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[200, 200]} />
        <meshStandardMaterial color="#a7a7a7" />
      </mesh>
    </StandardEnvironment>
  );
}
