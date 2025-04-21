import IconCenter from '../assets/icons/DividerIcons/IconCenter';
import IconLeft from '../assets/icons/DividerIcons/IconLeft';
import IconRight from '../assets/icons/DividerIcons/IconRight';

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-0 my-16">
      <IconLeft className="fill-blueLightWedding" />
      <div className="border-t border-2 border-blueLightWedding md:w-60 w-24 mb-2"></div>
      <IconCenter className="fill-blueLightWedding"/>
      <div className="border-t border-2 border-blueLightWedding md:w-60 w-24 mb-2"></div>
      <IconRight className="fill-blueLightWedding"/>
    </div>
  );
};

export default Divider;
