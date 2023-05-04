export const downloadImage = (format: 'png', svgRef: any) => {
  const svg = svgRef.current!.children[0];
  if (!svg) return;

  const svgData = new XMLSerializer().serializeToString(svg);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;

  const img1 = new Image();
    
  img1.onload = () => {
    ctx.drawImage(img1, 0, 0);

    const centerImage = svgRef.current!.children[0].children[2];
    const hrefCenterImage = centerImage.getAttribute('xlink:href');

    if (centerImage) {
      const img2 = new Image();
      img2.src = `${hrefCenterImage}`;

      console.log(img2)
      img2.onload = () => {
        const x = centerImage.getAttribute('x')!;
        const y = centerImage.getAttribute('y')!;
        const width = centerImage.getAttribute('width')!;
        const height = centerImage.getAttribute('height')!;
        ctx.drawImage(img2, parseFloat(x), parseFloat(y), parseFloat(width), parseFloat(height));
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `qrcode.${format}`;
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
          }
        }, `image/${format}`);
      };
      img2.onerror = (err) => {
        console.error('Error loading center image:', err);
      };
      img2.src = centerImage.getAttribute('href')!;
    } else {
      canvas.toBlob((blob) => {
        if (blob) {
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
  img1.onerror = (err) => {
    console.error('Error loading QR code SVG:', err);
  };
  img1.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};
