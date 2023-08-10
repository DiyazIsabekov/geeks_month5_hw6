import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../store/reducers/mainPageSlice";

const MainPage = () => {
  const { dataProducts } = useSelector((state) => state.mainPageSlice);
  const dispatch = useDispatch();

  return (
    <div>
      {dataProducts.map((e) => (
        <div style={{ textAlign: "center" }} key={e.id}>
          <h2>{e.name}</h2>
          <span>{e.price}</span>
          <p>{e.description}</p>
          <button
            onClick={() =>
              dispatch(
                changeCart({
                  id: e.id,
                  name: e.name,
                  price: e.price,
                  description: e.description,
                })
              )
            }
          >
            В корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
