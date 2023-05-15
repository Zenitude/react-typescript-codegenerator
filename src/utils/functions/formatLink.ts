import { ImageSettings } from "../types/types";
import { networks } from '../datas/networks';

export const formatLink = (
  e: React.ChangeEvent<HTMLInputElement>,
  images: ImageSettings,
  setImage: React.Dispatch<React.SetStateAction<ImageSettings>>
  ) => {

    let value = e.currentTarget.value;
    
    networks.forEach(network => {
      if(value.includes(network.link)) {
        value = value.replace(network.link, "");
        value = value.replace("/", "");
        setImage({...images, src: network.icon});
        // text!.innerHTML = `${network.name} : `.concat(value);
      }
    })
}