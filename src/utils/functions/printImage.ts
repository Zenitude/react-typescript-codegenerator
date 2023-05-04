export const printImage = (code: string, svgRef: any) => {
    const svg = svgRef.current!.children[0];
    if (!svg) return;

    let img;

    if(code === 'qrcode') {
      img = svgRef.current!.children[0].children[2];
      if(!img) return;
    }

    const windowContent = '<!DOCTYPE html>';
    const printDocument = window.open('', '_blank', 'width=800,height=600,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes');


    if (!printDocument) return;

    const printDocumentContent = `
      <html>
        <head>
          <title>QR Code</title>
          <style>
            *, ::before, ::after {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            html, body, .container {
              width: 100%;
              height: 100%;
              border:none;
            }

            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
            }

            
          </style>
        </head>
        <body>
          <div class="container">
            ${svg.outerHTML}
            ${code === 'qrcode' ? img.outerHTML : ''}
          </div>
        </body>
      </html>
    `;

    printDocument.document.open();
    printDocument.document.write(windowContent);
    printDocument.document.write(printDocumentContent);
    printDocument.document.close();

    printDocument.focus();
    printDocument.print();
    printDocument.close();
  };