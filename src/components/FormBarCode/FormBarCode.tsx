import { PropsFormBar } from "../../utils/types/types";
import { FormContainer, Container } from "./FormBarCode.style";
// import formatCodes from '../../utils/datas/formatBar.json';

export default function FormBarCode({options, setOptions}: PropsFormBar) {

  return (
    <FormContainer>
        
        {/* <fieldset>

            <legend>Formatage du code</legend>

            <Container>
                <label htmlFor="formatBar">Format</label>
                <select name="formatBar" id="formatBar" defaultValue={options.format} onChange={(e) => setOptions({...options, format: e.target.value})}>
                    { formatCodes.map((code, index) => (
                        <optgroup key={`${index}-${code.groupe}`} label={code.groupe}>
                            {
                                code.datas.map((data, index) => (
                                    <option
                                        key={`${index}-${data}`}
                                        value={data}
                                    >{data}</option>
                                ))
                            }
                        </optgroup>
                    ))}
                </select>
            </Container>

        </fieldset> */}

        <fieldset>
            <legend>Gestion du texte</legend>

            <Container>
                <label htmlFor="valueBar">Texte à afficher</label>
                <input type="text" id="valueBar" name="valueBar" onChange={(e) => setOptions({...options, value: e.target.value})} value={options.value} />
            </Container>

            <Container>
                <label htmlFor="displayValue">Afficher le Texte</label>
                <select name="displayValue" id="displayValue" defaultValue={options.displayValue === true ? "1" : "0"} onChange={(e) => setOptions({...options, displayValue: e.target.value === '1' ? true : false})}>
                    <option value="1">Afficher</option>
                    <option value="0">Masquer</option>
                </select>
            </Container>

            <Container>
                <label htmlFor="textAlign">Alignement</label>
                <select name="textAlign" id="textAlign" defaultValue={options.textAlign} onChange={(e) => setOptions({...options, textAlign: e.target.value})}>
                    <option value="left">Gauche</option>
                    <option value="center">Centré</option>
                    <option value="right">Droite</option>
                </select>
            </Container>

            <Container>
                <label htmlFor="textPosition">Positionnement</label>
                <select name="textPosition" id="textPosition" defaultValue={options.textPosition} onChange={(e) => setOptions({...options, textPosition: e.target.value})}>
                    <option value="top">Haut</option>
                    <option value="bottom">Bas</option>
                </select>
            </Container>
            
            <Container>
                <label htmlFor="fontOptions">Options Police d'écriture</label>
                <select name="fontOptions" id="fontOptions" defaultValue={options.fontOptions} onChange={(e) => setOptions({...options, fontOptions: e.target.value})}>
                    <option value="">Normal</option>
                    <option value="bold">Gras</option>
                    <option value="italic">Italic</option>
                    <option value="bold italic">Gras Italic</option>
                </select>
            </Container>

            <Container>
                <label htmlFor="font">Police d'écriture</label>
                <input type="text" name="font" id="font" onChange={(e) => setOptions({...options, font: e.target.value})} value={options.font} />
            </Container>

            <Container>
                <label htmlFor="textMargin">Marges du Texte</label>
                <input type="number" name="textMargin" id="textMargin" onChange={(e) => setOptions({...options, textMargin: e.target.value})} value={options.textMargin} />
            </Container>

            <Container>
                <label htmlFor="fontSize">Taille du texte</label>
                <input type="number" name="fontSize" id="fontSize" onChange={(e) => setOptions({...options, fontSize: e.target.value})} value={options.fontSize} />
            </Container>

            
        </fieldset>

        <fieldset>
            <legend>Gestion des lignes</legend>

            <Container>
                <label htmlFor="widthBar">Largeur</label>
                <input type="number" id="widthBar" name="widthBar" onChange={(e) => setOptions({...options, width: e.target.value})} value={options.width} />
            </Container>

            <Container>
                <label htmlFor="heightBar">Hauteur</label>
                <input type="number" id="heightBar" name="heightBar" onChange={(e) => setOptions({...options, height: e.target.value})} value={options.height}/>
            </Container>

            <Container>
                <label htmlFor="lineColor">Couleur des lignes</label>
                <input type="color" name="lineColor" id="lineColor" onChange={(e) => setOptions({...options, lineColor: e.target.value})} value={options.lineColor} />
            </Container>

            <Container>
                <label htmlFor="background">Couleur de fond</label>
                <input type="color" name="background" id="background" onChange={(e) => setOptions({...options, background: e.target.value})} value={options.background} />
            </Container>

            <Container>
                <label htmlFor="margin">Toutes les marges</label>
                <input type="number" name="margin" id="margin" onChange={(e) => setOptions({ ...options, margin: parseInt(e.target.value)})} value={options.margin} />
            </Container>

            <Container>
                <label htmlFor="marginTop">Marge Haut</label>
                <input type="number" name="marginTop" id="marginTop" onChange={(e) => setOptions({ ...options, marginTop: parseInt(e.target.value)})} value={options.marginTop} />
            </Container>

            <Container>
                <label htmlFor="marginRight">Marge Droite</label>
                <input type="number" name="marginRight" id="marginRight" onChange={(e) => setOptions({ ...options, marginRight: parseInt(e.target.value)})} value={options.marginRight} />
            </Container>

            <Container>
                <label htmlFor="marginBottom">Marge Bas</label>
                <input type="number" name="marginBottom" id="marginBottom" onChange={(e) => setOptions({ ...options, marginBottom: parseInt(e.target.value)})} value={options.marginBottom} />
            </Container>

            <Container>
                <label htmlFor="marginLeft">Marge Gauche</label>
                <input type="number" name="marginLeft" id="marginLeft" onChange={(e) => setOptions({ ...options, marginLeft: parseInt(e.target.value)})} value={options.marginLeft} />
            </Container>
        </fieldset>
    </FormContainer>
  )
}
