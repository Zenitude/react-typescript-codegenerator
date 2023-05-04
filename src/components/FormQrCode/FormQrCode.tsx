import { useState, useEffect } from 'react';
import { FormContainer, Container } from './FormQrCode.style';
import { PropsFormQr } from '../../utils/types/types';

export default function FormQrCode({options, setOptions}: PropsFormQr) {
  const [ imageSettings, setImageSettings ] = useState(options.imageSettings);

  useEffect(() => {
    setOptions({...options, imageSettings: imageSettings})
  }, [imageSettings])

    return (
      <FormContainer>

        <fieldset>
          <legend>Gestion du QrCode</legend>

          <Container>
            <label htmlFor="value">Lien</label>
            <input type="text" name="value" id="value" onChange={(e) => setOptions({...options, value: e.target.value})} value={options.value}/>
          </Container>
          
          <Container>
            <label htmlFor="size">Taille (px)</label>
            <input type="number" name="value" id="value" onChange={(e) => setOptions({...options, size: e.target.value === '' ? 0 : parseInt(e.target.value)})} value={options.size}/>
          </Container>

          <Container>
            <label htmlFor="bgColor">Couleur de fond</label>
            <input type="color" name="bgColor" id="bgColor" onChange={(e) => setOptions({...options, bgColor: e.target.value})} value={options.bgColor}/>
          </Container>

          <Container>
            <label htmlFor="fgColor">Couleur du QrCode</label>
            <input type="color" name="fgColor" id="fgColor" onChange={(e) => setOptions({...options, fgColor: e.target.value})} value={options.fgColor}/>
          </Container>

          <Container>
            <label htmlFor="level">Format QrCode</label>
            <select name="level" id="level" defaultValue={options.level} onChange={(e) => setOptions({...options, level: e.target.value})}>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </Container>

          <Container>
            <label htmlFor="includeMargin">Inclure des marges</label>
            <select name="includeMargin" id="includeMargin" defaultValue={options.includeMargin ? "1" : "0"} onChange={(e) => setOptions({...options, includeMargin: e.target.value ? true : false})}>
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </Container>
        </fieldset>
        
        <fieldset>
          <legend>Gestion de l'image centrale</legend>

          <Container>
            <label htmlFor="src">Lien</label>
            <input type="text" name="src" id="src" onChange={(e) => setImageSettings({...imageSettings, src: e.target.value})} value={options.imageSettings.src}/>
          </Container>

          <Container>
            <label htmlFor="height">Hauteur</label>
            <input type="number" name="height" id="height" onChange={(e) => setImageSettings({...imageSettings, height: e.target.value === '' ? 0 : parseInt(e.target.value)})} value={options.imageSettings.height} />
          </Container>

          <Container>
            <label htmlFor="width">Largeur</label>
            <input type="number" name="width" id="width" onChange={(e) => setImageSettings({...imageSettings, width: e.target.value === '' ? 0 : parseInt(e.target.value)})} value={options.imageSettings.width} />
          </Container>

          <Container>
            <label htmlFor="excavate">Inclure des marges</label>
            <select name="excavate" id="excavate" defaultValue={options.imageSettings.excavate === true ? "1" : "0"} onChange={(e) => setImageSettings({...imageSettings, excavate: e.target.value === "1" ? true : false})}>
              <option value="1">Oui</option>
              <option value="0">Non</option>
            </select>
          </Container>
        </fieldset>

      </FormContainer>
    )
}
