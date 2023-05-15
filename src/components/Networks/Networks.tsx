import { NetworksContainer, NetworkLink, NetworkImage } from "./Networks.style";
import { NetworksProps } from "@renderer/utils/types/types";

export default function Networks({networks}: NetworksProps) {
  return (
    <NetworksContainer>
      {
        networks.map((network, index) => (
          <NetworkLink key={`${index}-${network.name}`} to={network.link}>
            <NetworkImage src={network.icon} alt={network.name}/>
          </NetworkLink>
        ))
      }
    </NetworksContainer>
  )
}
