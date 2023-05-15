export const printImage = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
  e.preventDefault();
  const canvas = ref.current!.children[0] as HTMLCanvasElement;  
  const imageCenter = canvas!.children[0].children[2];

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
            ${canvas.outerHTML}
            ${imageCenter?.outerHTML}
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