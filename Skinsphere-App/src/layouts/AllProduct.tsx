import CleanserProduct from '../component/CleanserProduct.tsx';
import SerumProduct from '../component/SerumProduct.tsx';
import MoisturizerProduct from '../component/MoisturizerProduct.tsx';
import FaceOilProduct from '../component/FaceOilProduct.tsx';



const AllProduct = (props: Props) => {
  return (
    <div>
        {<CleanserProduct />}
        {<SerumProduct />}
        {<MoisturizerProduct />}
        {<FaceOilProduct />}

    </div>
  )
}

export default AllProduct