export const downloadImage = (code: string, format: 'png', svgRef: any) => {
    const svg = svgRef.current!.children[0];
    if(!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;

    const img = new Image();

    let imageCenter: any, img2: HTMLImageElement, x: number, y: number, width: number, height: number;
    if(code === 'qrcode') {
      imageCenter = svgRef.current!.children[0].children[2];
      img2 = new Image();
      x = parseFloat(imageCenter.getAttribut('x'));
      y = parseFloat(imageCenter.getAttribut('y'));
      width = parseFloat(imageCenter.getAttribut('width'));
      height = parseFloat(imageCenter.getAttribut('height'));
    }

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
 
      if(imageCenter) {
        
        img2.onload = () => {
          ctx.drawImage(img2, x, y, width, height);

          canvas.toBlob(blob => {
            if(blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `qrcode.${format}`;
              link.click();
              link.remove();
              URL.revokeObjectURL(url);
            }
          }, `image/${format}`); 
        }
          // img2.src = imageCenter.getAttribut('href');
          // img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
      } else {

        canvas.toBlob(blob => {
          if(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `qrcode.${format}`;
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
          }
        }, `image/${format}`); 
      }
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }